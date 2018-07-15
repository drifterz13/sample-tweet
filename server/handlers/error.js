function errorHandler(err, req, res, next) {
  console.log('error', err)
  return res.status(err.status || 404).json({
    error: {
      message: err.message || 'Ooops! Something went wrong!'
    }
  })
}

module.exports = errorHandler