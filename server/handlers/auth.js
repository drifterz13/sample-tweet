const db = require('../models')
const jwt = require('jsonwebtoken')

exports.signup = async function (req, res, next) {
  try {
    const { username, email, password, profileImageUrl } = req.body
    if (!username || !email || !password) {
      return next({
        status: 400,
        message: 'Please, correct the form'
      })
    }
    let foundUser = await db.User.findOne({ email: req.body.email })
    if (foundUser) {
      return next({
        status: 401,
        message: 'Email and/or Username is already taken.'
      })
    } else {
      let user = await db.User.create(req.body)
      const token = jwt.sign(
        {
          username,
          email,
          profileImageUrl,
          _id: user._id
        },
        process.env.SECRET_KEY,
      )
      return res.json({
        username,
        email,
        profileImageUrl,
        _id: user._id,
        token
      })
    }

  } catch (err) {
    return next({
      status: 401,
      message: 'Email and/or Username is already taken.'
    })
  }
}

exports.signin = async function (req, res, next) {
  try {
    let user = await db.User.findOne({ email: req.body.email });
    const compared = await user.comparePassword(req.body.password)
    console.log(compared)
    if (user && compared) {
      const { username, email, profileImageUrl, _id } = user;
      const token = jwt.sign(
        {
          username,
          email,
          profileImageUrl,
          _id
        },
        process.env.SECRET_KEY
      )
      return res.json({
        username,
        email,
        profileImageUrl,
        _id,
        token
      })
    } else {
      return next({
        status: 401,
        message: 'Invalid Email and/or Password'
      })
    }
  } catch (err) {
    return next({
      status: 401,
      message: 'Invalid Email and/or Password'
    })
  }
}