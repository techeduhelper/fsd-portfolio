// const nodemailer = require('nodemailer');
// const sendgridTransport = require("nodemailer-sendgrid-transport");
const sgMail = require('@sendgrid/mail')


// api transporter 
// const transporter = nodemailer.createTransport(
//     sendgridTransport({
//         auth: {
//             apiKey: process.env.API_SENDGRID,
//         },
//     })
// )


const sendEmail = (req, res) => {
    try {
        const { name, email, message } = req.body
        if (!name || !email || !message) {
            return res.status(422).json("Please provide all details")
        }
        // email send

        sgMail.setApiKey(process.env.API_SENDGRID)
        const msg = {
            to: 'uccmaniruddinkhan@gmail.com', // Change to your recipient
            from: 'uccmaniruddinkhan@gmail.com', // Change to your verified sender
            subject: 'Message From Your Portfolio',
            text: 'Hi ',
            html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${message}</p></li>
        </ul>
      `,
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    } catch (error) {
        res.status(400).send({
            message: 'something went wrong',
            error
        })
    }

}

module.exports = { sendEmail }