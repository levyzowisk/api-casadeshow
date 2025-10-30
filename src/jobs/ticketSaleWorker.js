const { Worker } = require('bullmq');
const { connection } = require('../config/redis');
const queue = require('../lib/Queue');
const { prisma } = require('../config/database');
const { findByID: findByIDRepo } = require('../repositories/sector/sector.repository');
const { create: createSaleRepo } = require('../repositories/sale/sale.repository');

const worker = new Worker('ticket-sale-queue', async (job) => {
  const { userId, eventId, items, couponId, paymentMethod, priceTotal, reservations, name, email } = job.data;
  
  const newSale = await createSaleRepo(userId, eventId, couponId, paymentMethod, items, priceTotal);
  
  await queue.add('email-notification-queue', {email, name});
    
  },
  {connection: connection}
);


const getCachedSector = async (id) => {
  const cacheKey = `sector:${id}`;

  const cachedData = await connection.get(cacheKey);
  if(cachedData) {
    return JSON.parse(cachedData);
  }
  return null;
}

const setCachedSector = async (cacheKey, sectorFromDb) => {
  await connection.set(
    cacheKey,
    JSON.stringify(sectorFromDb),
    'EX',
    3600
  );

}

worker.on('completed', (job) => console.log(`Job ${job.id} completado.`));
worker.on('failed', (job, err) =>
  console.log(`Job ${job.id} falhou com ${err.message}.`),
);

module.exports = {
  getCachedSector,
  setCachedSector
}