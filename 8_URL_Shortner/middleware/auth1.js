const { getUser } = require('../service/auth.js');

const checkForAuthentication = (req, res, next) => {
    try {
        const authorizationHeader = req.headers?.authorization;
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return next();
        } else {
            const token = userUid.split('Bearer ')[1];
            const user = getUser(token)
            if (!user) return res.redirect('/login');
            req.user = user;
        }
    } catch (error) {
        res.status(401).json({ message: 'unathorized user' })
    }

    return next();
}

const restrictTo = (roles) => {
    return (req, res, next) => {
        if (!req.user) return res.redirect('/login');

        if(!roles.includes(req.user.role)) return res.status(401).end('Unathorized user');

        return next();
    }
}

module.exports = {
    checkForAuthentication,
    restrictTo
};