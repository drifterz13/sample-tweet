const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/tweet', {
  useNewUrlParser: true
})

module.exports.User = require('./user')
module.exports.Message = require('./message')