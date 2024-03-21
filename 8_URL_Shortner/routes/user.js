const express = require('express');
const { handleGetAllUsers, handleGetUser, handleCreateUser, handleUpdateUserByEmail, handleDeleteUserByEmail, } = require('../controller/user.js');
const router = express.Router();

router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateUser)

router.route('/:email')
    // .get(handleGetUser)
    .patch(handleUpdateUserByEmail)
    .delete(handleDeleteUserByEmail)

router.route('/login')
    .post(handleGetUser)

module.exports = router;