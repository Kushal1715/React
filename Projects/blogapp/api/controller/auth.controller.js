const User = require("../models/user.model");
const bcryptjs = require('bcryptjs')

exports.postSignup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password || username === '' || email === "" || password === "") {
    res.status(400).json({ error: 'enter all fields' })
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
    res.status(400).json({ error: e.errmsg })
  }

}