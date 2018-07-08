function errorHandler(err, req, res, next) {
  return res.status(err.status || 404).json({
    error: {
      message: err.message || 'Ooops! Something went wrong!'
    }
  })
}

module.exports = errorHandler