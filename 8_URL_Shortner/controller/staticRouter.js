const {URL} = require('../model/url')
const User = require('../model/user')

const handleReturnId = async (req, res) => {
    if(!req.user) return res.redirect('/login') 
    const urls = await URL.find({ createdBy: req.user._id })
    return res.render('home', { urls: urls })
}

const handleSignup = async (req, res) => {
    return res.render('signup')
}

const handleLogin = async (req, res) => {
    return res.render('login')
}

module.exports = {
    handleReturnId,
    handleSignup,
    handleLogin
}