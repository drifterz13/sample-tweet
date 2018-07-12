const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    }
  ]
})

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next()
    }
    const hashPassword = await bcrypt.hash(this.password, 10)
    this.password = hashPassword
    return next()
  } catch (err) {
    return next(err)
  }
})

userSchema.methods.comparePassword = async function (password, next) {
  try {
    let isMatch = await bcrypt.compare(password, this.password)
    return isMatch
  } catch (err) {
    next(err)
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User