const { getUser } = require('../service/auth.js');

const checkForAuthentication = (req, res, next) => {
    console.log('Checking for authentication')
    try {
        const tokenCookie = req.cookies?.token;
        console.log(tokenCookie)
        if (!tokenCookie) {
            // res.redirect('/login');
            return next();
        } else {
            const token = tokenCookie;
            const user = getUser(token)
            console.log("auth Page - ", user);
            if (!user) return res.redirect('/login'); 
            req.user = user;
            console.log(req.user);
        }
    } catch (error) {
        res.status(401).json({ message: 'unathorized user' })
    }

    return next();
}

const restrictTo = (roles) => {
    return (req, res, next) => {
        if (!req.user) return res.redirect('/login');

        if (!roles.includes(req.user.role)) return res.status(401).end('Unathorized user');

        return next();
    }
}

module.exports = {
    checkForAuthentication,
    restrictTo
};