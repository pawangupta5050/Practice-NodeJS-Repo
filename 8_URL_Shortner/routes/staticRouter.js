const express = require('express');
const { restrictTo } = require('../middleware/auth.js')
const { handleReturnId, handleSignup, handleLogin, handleReturnAllUrl } = require('../controller/staticRouter.js')
const router = express.Router();

router.get('/admin', restrictTo(['ADMIN']), handleReturnAllUrl)

router.get('/', restrictTo(['NORMAL', 'ADMIN']), handleReturnId)

router.get('/signup', handleSignup)

router.get('/login', handleLogin)
 
module.exports = router;