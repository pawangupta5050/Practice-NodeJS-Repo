const { getUser } = require('../service/auth.js');

const restrictLoggedInUserOnly = async (req, res, next) => {
    const userUid = await req.cookies?.uid;
    // console.log(userUid);
    if (!userUid) return res.redirect('/login')

    const user = await getUser(userUid)
    if (!user) return res.redirect('/login');

    req.user = user;
    next();
}

const checkAuth = async (req, res, next) => {
    const userUid = await req.cookies?.uid;

    const user = await getUser(userUid)

    req.user = user;
    next();
}

module.exports = {
    restrictLoggedInUserOnly,
    checkAuth,
};