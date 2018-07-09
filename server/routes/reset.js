const express = require('express')
const router = express.Router()
const { sendMail } = require('../handlers/reset')

router.post('/reset_password', sendMail)

module.exports = router