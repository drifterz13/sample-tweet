const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.Promise = Promise;
mongoose.connect('mongodb://drifterz13:dsp41313@ds253831.mlab.com:53831/drifterz13', {
  useNewUrlParser: true
})

module.exports.User = require('./user')
module.exports.Message = require('./message')