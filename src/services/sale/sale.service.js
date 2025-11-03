const { connection } = require("../../config/redis");
const { getCachedSector, setCachedSector } = require("../../jobs/ticketSaleWorker");
const queue = require("../../lib/Queue");
const { findByID: findByIDRepo, findSectorsByIds } = require("../../repositories/sector/sector.repository");
const {BaseError} = require('../../utils/BaseError');
const { findById: findByIdEvent } = require("../event/event.service");
const { findByID: findByIDUser } = require("../user/user.service");

async function createSale(data) {
    const idsSectorWithQuantity = [];
    const idsSector = data.items.map((item)=> {
        idsSectorWithQuantity.push(item);
        return item.sector_id;
    });
    const user = await findByIDUser(data.user_id);

    await findByIdEvent(data.event_id);

    const reservations = [];
    const idsSectorDb = await findSectorsByIds(idsSector);

    if(idsSectorDb.length != idsSector.length) {
        throw new BaseError(404, 'Setor fornecido inexistente');
    }

    for(const item of idsSectorWithQuantity) {
        
        let sector = await getCachedSector(item.sector_id);
        console.log("Setor:" + sector);
        

        if(!sector) {
            const sectorFromDb = await findByIDRepo(item.sector_id);
            await setCachedSector(`sector:${sectorFromDb.id}`, sectorFromDb); 
            sector = sectorFromDb; 
        }

        const redisKey = `event:${data.event_id}:sector:${item.sector_id}:sold_count`;

        const currentSoldCount = await connection.incrby(redisKey, item.quantity);
        

        if(currentSoldCount > sector.capacity) {
            await connection.DECRBY(redisKey, item.quantity);
            
            for (const r of reservations) {
                await connection.decrby(r.key, r.quantity);
            }
            throw new BaseError(404, 'Capacidade esgotada para o setor');
        }

        reservations.push({ 
            key: redisKey, 
            quantity: item.quantity, 
            price: sector.price, 
            service_charge: sector.service_charge 
        });
    }

    const priceTotal = reservations.reduce((total, res) => {
        const itemPrice = parseFloat(res.price) + parseFloat(res.service_charge);
        return total + (itemPrice * res.quantity);
    }, 0);

    const workerJobData = {
        userId: data.user_id, 
        eventId: data.event_id,
        name: user.name,
        email: user.email,
        items: data.items,
        couponId: data.coupon_id || null,
        paymentMethod: data.payment_method,
        priceTotal: priceTotal,     
        reservations: reservations 
    };

    await queue.add('ticket-sale-queue' , workerJobData);
    
}

module.exports = {
    createSale
}