const User = require('../model/user.js')

const handleGetAllUsers = async (req, res) => {
    const user = await User.find({})
    return res.json(user);
}

const handleGetUserById = async (req, res) => {
    const dbUsers = await User.find({})
    res.send(dbUsers)
}

const handleAddNewUser = async (req, res) => {
    const body = req.body
    if (!body.firstName || !body.lastName || !body.email || !body.gender || !body.jobTitle) {
        return res.status(400).json({ message: "enter all the values" });
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle
    })

    res.status(201).json({ message: 'Success', id: result.id })
}

const handleUpdateUserById = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
    return res.status(201).json({ message: 'Updated' })
}


const handleDeleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({ message: 'deleted' })
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleAddNewUser,
    handleUpdateUserById,
    handleDeleteUserById,
}