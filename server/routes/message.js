const express = require('express')
const router = express.Router({mergeParams: true})
const { addMessage, deleteMessage, getMessage } = require('../handlers/message')

router.route('/').post(addMessage)
router.route('/:message_id')
  .get(getMessage)
  .delete(deleteMessage)

module.exports = router