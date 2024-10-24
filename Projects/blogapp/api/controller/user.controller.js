const User = require("../models/user.model")
const { errorHandler } = require("../utils/error")
const bcryptjs = require('bcryptjs')

exports.test = (req, res) => {
  res.json({ msg: 'api is working' })
}

exports.updateUser = async (req, res, next) => {
  if (!(req.user.id === req.params.userId)) {
    return next(errorHandler(403, 'You are not allowed to update this user'))
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, 'passworod must be at least 6 characters.'))
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(errorHandler(400, 'username must be between 7 and 20 characters'))
    }
    if (req.body.username != req.body.username.toLowerCase()) {
      return next(errorHandler(400, 'username must be lowercase'))
    }
    if (req.body.username.includes(' ')) {
      return next(errorHandler(400, 'username must not contain spaces'))
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(errorHandler(400, 'username must only contain letters and numbers'))
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
      $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.profilePicture
      }
    }, { new: true })
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest)
  } catch (e) {
    next(e)
  }

}

exports.deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return errorHandler(403, 'you are not allowed to delete this user')
  }
  try {
    await User.findByIdAndDelete(req.params.userId)
    res.status(200).json('user deleted')
  } catch (e) {
    next(e)
  }
}

exports.signout = (req, res, next) => {
  try {
    res.clearCookie('access_token').status(200).json('User has been signed out')
  } catch (e) {
    next(e)
  }
}