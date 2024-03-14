const express = require('express')
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/NodePractice')
    .then(() => console.log('connection established'))
    .catch((err) => console.log('connection', err))

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
    jobTitle: {
        type: String,
    },
})

const User = mongoose.model('User', userSchema);


app.use(express.urlencoded({ extended: false }))

app.get('/users', async (req, res) => {
    const dbUsers = await User.find({})
    res.json(dbUsers)
})

app.route('/api/users/:id')
    .get(async (req, res) => {
        const dbUsers = await User.find({})
        res.send(dbUsers)
    })
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id, req.body)
        return res.status(201).json({ message: 'Updated' })
    })
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({ message: 'deleted' })
    })

app.post('/api/users', async (req, res) => {
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

    res.status(201).json({ message: 'Success' })
})

app.listen(8000, () => console.log('listening on 8000'));