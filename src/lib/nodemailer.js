const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "ursula.gislason@ethereal.email",
    pass: "YJ8s8SbAePjyK6ra8N",
  },
});

async function sendEmail(email, name) {
    const message = await transporter.sendMail({
        from: "casadeshowapi@gmail.com",
        to: email,
        subject: `Compra realizada com sucesso, ${name}!`,
        text: `Sua compra foi efutuada!`

    })
    console.log(message.messageId);
    
}

module.exports = {
    sendEmail
}