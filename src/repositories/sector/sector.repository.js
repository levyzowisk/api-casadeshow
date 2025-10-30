const {prisma} = require('../../config/database');

async function findByID(id) {
    return await prisma.sector.findUnique({where: {id}});
}

async function update(id, data) {
    return await prisma.sector.update({
        where: {
            id
        },
        data
    })
}

async function findSectorsByIds(ids) {
    return await prisma.sector.findMany({
        where: {
        id: {
            in: ids
        }  
        },
        select: {
            id: true
        }
    })
}


async function find() {
    return await prisma.sector.findMany();
}
module.exports = {
    findByID,
    update,
    findSectorsByIds,
    find
}