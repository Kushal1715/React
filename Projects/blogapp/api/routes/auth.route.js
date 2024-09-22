const express = require('express');
const { postSignup } = require('../controller/auth.controller');
const router = express.Router();

router.post('/signup', postSignup)

module.exports = router;