const dotenv = require('dotenv').config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.emailAddress,
        pass: process.env.emailPassword,
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(emailAddress) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: `"${process.env.name}}" <${process.env.emailAddress}>`, // sender address
        to: emailAddress, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
}

const emailAddress = ['email1@gmail.com', 'email2@gmail.com', 'email3@gmail.com']

emailAddress.forEach(email => {
    main(email).catch(console.error);
})