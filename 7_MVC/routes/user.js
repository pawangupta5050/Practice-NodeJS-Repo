const express = require('express');
const { handleGetAllUsers, handleGetUserById, handleAddNewUser, handleUpdateUserById, handleDeleteUserById, } = require('../controller/user.js')
const router = express.Router();



router.route('/').get(handleGetAllUsers).post(handleAddNewUser);

router.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router