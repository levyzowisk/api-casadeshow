const { Worker } = require("bullmq");
const { connection } = require("../config/redis");
const { sendEmail } = require("../lib/nodemailer");

const workerEmail = new Worker('email-notification-queue', async (job) => {
    const {email, name, } = job.data;

    await sendEmail(email, name);

}, {connection: connection});

workerEmail.on('completed', (job) => console.log(`Job ${job.id} completado.`));
workerEmail.on('failed', (job, err) =>
  console.log(`Job ${job.id} falhou com ${err.message}.`),
);
