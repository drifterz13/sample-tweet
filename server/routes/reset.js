const express = require('express')
const router = express.Router({mergeParams: true})
const { requestPassword, confirmResetPassword } = require('../handlers/reset')

router.post('/', requestPassword)
router.get('/confirmation/:cf_id', confirmResetPassword)

module.exports = router