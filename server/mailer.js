const nodemailer = require('nodemailer')

exports.setupTransport = function () {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.NODEMAIL_USER,
      pass: process.env.NODEMAIL_PASS
    }
  });
  return transporter
}