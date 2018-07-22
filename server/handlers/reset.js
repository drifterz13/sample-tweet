const db = require('../models')
const jwt = require('jsonwebtoken')
const { setupTransport } = require('../mailer')

exports.requestPassword = async function (req, res, next) {
  try {
    const foundUser = await db.User.findById({ _id: req.params.id })
    if (foundUser) {
      const newPassword = req.body.newPassword
      const { _id, email } = foundUser
      const confirmToken = await jwt.sign(
        {
          _id,
          email,
          newPassword
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '1h'
        }
      )
  
      let transporter = setupTransport()
  
      let mailOptions = {
        from: '"Node Mailer"',
        to: 'mixmyxxe@gmail.com',
        subject: 'Reset password request',
        text: ``,
        html: `<h3>Click this link to confirm your new password request</h3> <hr> 
        <a>http://localhost:8000/api/reset_password/confirmation/${confirmToken}</a>`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return next({
            status: 400,
            message: 'Invalid credentials.'
          })
        }
        return res.status(200).json({})
      });
    }
  
  } catch (err) {
    return next({
      status: 400,
      message: 'Invalid credentials.'
    })
  } 
}

exports.confirmResetPassword = async function (req, res, next) {
  try {
    const confirmToken = req.params.cf_id;
    const mailDecoded = await jwt.decode(confirmToken)
    const foundUser = await db.User.findById({ _id: mailDecoded._id })
    if (foundUser) {
      const { email, _id } = foundUser
      foundUser.password = mailDecoded.newPassword
      foundUser.save()
      return res.status(200).json({
        _id,
        email
      })
    } else {
      return next({
        status: 404,
        message: 'User not found!'
      })
    }
  } catch (err) {
    return next({
      status: 404,
      message: 'User not found!'
    })
  }
}