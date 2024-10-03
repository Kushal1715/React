const express = require('express');
const { postSignup, signIn, google } = require('../controller/auth.controller');
const router = express.Router();

router.post('/signup', postSignup)
router.post('/signin', signIn)
router.post('/google', google)

module.exports = router;