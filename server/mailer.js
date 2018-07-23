const nodemailer = require('nodemailer')

exports.setupTransport = function () {
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'vbooqtamuplkl2tp@ethereal.email',
      pass: 'Hx3PUZfwPTPGx4pusp'
    }
    // host: 'smtp.gmail.com',
    // port: 465,
    // auth: {
    //   user: process.env.NODEMAIL_USER,
    //   pass: process.env.NODEMAIL_PASS
    // }
  });
  return transporter
}