const db = require('../models')
const nodemailer = require('nodemailer')

exports.sendMail = function (req, res, next) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: '"Some where 👻" <foo@example.com>', // sender address
    to: 'mixmyxxe@gmail.com', // list of receivers
    subject: 'Test nodemailer ✔', // Subject line
    text: 'Test nodemailer?', // plain text body
    html: '<b>Hello world?</b>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}