const shortid = require('shortid');
const {URL} = require('../model/url.js')

const handleGenerateUrlId = async (req, res) => {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error : 'url is required' });
    const shortId = shortid()
    await URL.create({
        shortId: shortId,
        redirectingUrl: body.url,
        visitHistory: [],
        createdBy: req.user?._id
    })

    return res.render('home', {
        id: shortId,
    })
}

const handleGetRedirectURL = async (req, res) => {
    const shortId = req.params.shortId;
    // console.log(shortId, req.params.shortId)
    const entry = await URL.findOneAndUpdate({shortId}, {
        $push: {
            visitHistory: { timestamp: Date.now() }
        }
    });

    res.redirect(entry.redirectingUrl);
}

const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalClicks : result.visitHistory.length, analytics : result.visitHistory});
}

module.exports = {
    handleGenerateUrlId,
    handleGetRedirectURL,
    handleGetAnalytics
}

