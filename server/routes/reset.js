const express = require('express')
const router = express.Router({mergeParams: true})
const { requestPassword } = require('../handlers/reset')

router.post('/', requestPassword)

module.exports = router