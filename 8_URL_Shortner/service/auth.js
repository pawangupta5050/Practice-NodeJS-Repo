const jwt = require('jsonwebtoken')
const secretKey = 'studiousgeek'

const setUser = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secretKey)
}

const getUser = (token) => {
    try {
        if (!token) return null;
        return jwt.verify(token, secretKey);
    } catch (error) {
        // Handle the error (e.g., token invalid or expired)
        console.error("Error verifying token:", error);
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}