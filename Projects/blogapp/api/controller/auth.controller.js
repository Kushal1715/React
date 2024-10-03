const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');
const { errorHandler } = require("../utils/error");
const jwt = require('jsonwebtoken')

exports.postSignup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password || username === '' || email === "" || password === "") {
    next(errorHandler(400, 'All fields are required'))
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  let newUser = new User({
    username,
    email,
    password: hashedPassword
  })

  try {
    let user = await newUser.save();
    if (!user) {
      return res.status(400).json({ err: 'something went wrong' })
    }
    res.json({ msg: "signed up successfully" })
  } catch (e) {
    next(e)
  }

}

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === '' || password === '') {
    return next(errorHandler(400, 'enter all the fields'))
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, 'user is not found'))
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword) {
      return next(errorHandler(400, 'password is incorrect'))
    }


    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res.status(200).cookie('access_token', token, {
      httpOnly: true
    }).json(rest)
  } catch (e) {
    next(e)
  }
}

exports.google = async (req, res, next) => {
  const { name, email, photoURL } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
      const { password, ...rest } = user._doc;
      res.status(200).cookie('access_token', token, {
        httpOnly: true,
      }).json(rest);
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8); //numbers and strings
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username: name.toLowerCase().split(' ').join('') + Math.random().toString(36).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: photoURL
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
      const { password, ...rest } = newUser._doc;

      res.status(200).cookie('access_token', token, {
        httpOnly: true,
      }).json(rest)
    }
  } catch (error) {
    next(error)
  }
}