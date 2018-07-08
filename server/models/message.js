const mongoose = require('mongoose')
const User = require('./user')

const messageSchema = new mongoose.Schema({
  text: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

messageSchema.pre('remove', async function(req, res, next) {
  try {
    const foundUser = await User.findById(this.user)
    foundUser.messages.remove(this._id)
    foundUser.save()
    return next()
  } catch (err) {
    return next(err)
  }
})

const Message = mongoose.model('Message', messageSchema)
module.exports = Message