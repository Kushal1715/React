const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body,validationResult } = require('express-validator');

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

router.post('/',validate([
  body('email','Enter a valid email').isEmail(),
  body('name','name length must be minimum 3 characters').isLength({ min: 3}),
  body('password','password length must be minimum 6 characters').isLength({ min: 6 })
]) ,async(req, res) => {
  const user = await User.create({ 
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
   }).then(user => res.json(user)).catch(err => {console.log(err);
    res.json({error: "please enter a unique value for email", message: err.message});
  });;
    
  })
  

module.exports = router;

