const {Queue} =  require('bullmq');
const {connection} = require('../config/redis');

const ticketSaleQueue = new Queue('ticket-sale-queue', {
    connection: connection,
});

const emailNotificationQueue = new Queue('email-notification-queue', {
  connection: connection,
});

module.exports = {
    queues: {
        ticketSaleQueue,
        emailNotificationQueue
    },
    async add(queueName, data) {
    if (queueName === 'ticket-sale-queue') {
      await ticketSaleQueue.add('process-sale', data);
    } else if (queueName === 'email-notification-queue') {
      await emailNotificationQueue.add('send-email', data);
    }
  },
}