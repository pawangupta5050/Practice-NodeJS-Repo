const express = require('express');
const { handleReturnId, handleSignup, handleLogin } = require('../controller/staticRouter.js')
const router = express.Router();

router.get('/', handleReturnId)

router.get('/signup', handleSignup)

router.get('/login', handleLogin)
 
module.exports = router;