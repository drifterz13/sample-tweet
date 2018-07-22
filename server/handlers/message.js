const db = require('../models')

exports.addMessage = async function (req, res, next) {
  try {
    let message = await db.Message.create({
      text: req.body.text,
      user: req.params.id
    })
    let foundUser = await db.User.findById({ _id: req.params.id })
    foundUser.messages.push(message._id)
    foundUser.save()
    let foundMessage = await db.Message
      .findById({ _id: message._id })
      // .populate('user', {
      //   username: true,
      //   profileImageUrl: true
      // })
    return res.status(200).json({ foundMessage })
  } catch (err) {
    return next(err)
  }
}

exports.deleteMessage = async function (req, res, next) {
  try {
    let foundMessage = await db.Message.findById(req.params.message_id)
    foundMessage.remove()
    return res.status(200).json({ foundMessage })
  } catch (err) {
    return next(err)
  }
}

exports.getMessage = async function (req, res, next) {
  try {
    let foundMessage = await db.Message.findById({_id: req.params.message_id})
    return res.status(200).json(foundMessage)
  } catch (err) {
    return next(err)
  }
}
