require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models')
const errorHandler = require('./handlers/error')
const authRoutes = require('./routes/auth')
const messageRoutes = require('./routes/message')
const resetRoutes = require('./routes/reset')
const { confirmResetPassword } = require('./handlers/reset')
const { checkLoggedIn, checkAuth } = require('./middlewares/auth')

const PORT = 8000 || process.env.PORT
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoutes)
app.use('/api/user/:id/message',
  checkLoggedIn,
  checkAuth,
  messageRoutes
)
app.use('/api/user/reset_password/:id', checkLoggedIn, checkAuth, resetRoutes)
app.use('/api/reset_password/confirmation/:cf_id', confirmResetPassword)

app.use('/api/messages', checkLoggedIn, async function (req, res, next) {
  try {
    let messages = await db.Message.find()
      .sort({ createdAt: -1 })
      .select('_id text user')
      .populate('user', {
        username: true,
        profileImageUrl: true
      })
    if (messages && messages.length > 0) {
      return res.status(200).json({ messages })
    } else {
      return res.status(200).json({messages: []})
    }
  } catch (err) {
    return next(err)
  }
})

app.use(function (req, res, next) {
  const err = new Error('Not found!')
  err.status = 404
  next(err)
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))