// const { v4: uuidv4 } = require('uuid');
const User = require('../model/user.js');
const { setUser } = require('../service/auth.js')

const handleGetAllUsers = async (req, res) => {
    const users = await User.find({});
    return res.json(users)
}

const handleGetUser = async (req, res) => {
    const {email, password} = req.body
    console.log(email, password)
    const user = await User.findOne({email, password});
    if(!user) return res.render('login', { error : 'Invalid email or password'})

    const token = setUser(user);
    console.log('user controller -',token)
    res.cookie("token", token)
    return res.redirect('/')
}

const handleCreateUser = async (req, res) => {
    const body = req.body;
    if(!body.name || !body.email || !body.password) return res.status(400).json({message: 'Invalid Input'});
    await User.create({
        name: body.name,
        email: body.email,
        password: body.password
    })

    return res.redirect('/login')
}

const handleUpdateUserByEmail = async (req, res) => {
    const email = req.params.email
    await User.findOneAndUpdate({email}, req.body)
    return res.json({message: 'User Updated successfully'})
}

const handleDeleteUserByEmail = async (req, res) => {
    const email = req.params.email
    await User.findOneAndDelete({email})
    return res.json({message: 'User deleted successfully'})
}

module.exports = {
    handleGetAllUsers,
    handleGetUser,
    handleCreateUser,
    handleUpdateUserByEmail,
    handleDeleteUserByEmail,
}