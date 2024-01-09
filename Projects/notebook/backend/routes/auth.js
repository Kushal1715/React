const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body,validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const validate = validations => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

router.post('/createuser',validate([
  body('email','Enter a valid email').isEmail(),
  body('name','name length must be minimum 3 characters').isLength({ min: 3}),
  body('password','password length must be minimum 6 characters').isLength({ min: 6 })
]) ,async(req, res) => {
  try{
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: "sorry the user with this email already exist"});
    }
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password,salt)
    user = await User.create({ 
      name: req.body.name,
      email: req.body.email,
      password: secPassword
     })
     const data = {
      user:{
        id: user.id
      }
     }
     var token = jwt.sign(data, 'kushal@');
     res.json(token);
  }catch(err){
    console.log(err.message);
    res.status(500).send("Interval server error");
  }  
  })

  router.post('/userlogin',validate([
    body('email','Enter a valid email').isEmail(),
    body('password','password cannot be blank').exists()
  ]) ,async(req, res) => {
    const {email,password} = req.body;
    try{
      let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({error: "please login with correct credentials"});
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword){
      return res.status(400).json({error: "please login with correct credentials"});
    }
    const data = {
      user:{
        id: user.id
      }
     }
     var token = jwt.sign(data, 'kushal@');
     res.json(token);
    }catch(err){
      console.log(err.message);
      res.status(500).send("Internal server error");
    } 
  })
  

module.exports = router;

