/*
    Video: https://www.youtube.com/watch?v=Va9UKGs1bwI
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'testnodemailerutn@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || 'testutn1' // TODO: your gmail password
    }
});

let mailOptions = {
    from: 'testnodemailerutn@gmail.com', 
    to: 'fidelblock1@gmail.com', 
    subject: 'Confirmacion de Registro',
    text: 'Muchas gracias por registrarte en nuestra pagina web'
};


transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error');
    }
    return log('Email enviado');
});