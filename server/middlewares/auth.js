const db = require('../models')
const jwt = require('jsonwebtoken')

exports.checkLoggedIn = async function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      return next()
    } else {
      return next({
        status: 401,
        message: 'Please logged in first!'
      })
    }
  } catch (err) {
    return next({
      status: 401,
      message: 'Please logged in first!'
    })
  }
}

exports.checkAuth = async function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = await jwt.decode(token)
    console.log('decode', decoded._id, req.params.id)
    if (decoded && decoded._id === req.params.id) {
      return next()
    } else {
      return next({
        status: 401,
        message: 'Invalid token!'
      })
    }
  } catch (err) {
    return next({
      status: 401,
      message: 'Invalid token!'
    })
  }
}