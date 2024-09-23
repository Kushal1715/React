const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');
const { errorHandler } = require("../utils/error");

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