const express = require('express');
const { handleGenerateUrlId, handleGetRedirectURL, handleGetAnalytics } = require('../controller/url.js')
const router = express.Router();

router.route('/')
    // .get()
    .post(handleGenerateUrlId)

router.route('/:shortId')
    .get(handleGetRedirectURL)
// .patch()
// .delete()

router.route('/analytics/:shortId')
    .get(handleGetAnalytics)

module.exports = router;