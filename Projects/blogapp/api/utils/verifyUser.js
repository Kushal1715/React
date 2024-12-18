const jwt = require('jsonwebtoken')
const { errorHandler } = require('./error')

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorHandler(401, 'Unauthorized'))
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized verification'))
    }
    req.user = user;
    next();
  })
}