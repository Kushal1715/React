const express = require('express');
const { postSignup, signIn } = require('../controller/auth.controller');
const router = express.Router();

router.post('/signup', postSignup)
router.post('/signin', signIn)

module.exports = router;