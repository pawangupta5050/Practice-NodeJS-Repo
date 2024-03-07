const express = require('express');
const app = express();
const fs = require('fs');
const users = require('./MOCK_DATA.json')

app.use(express.urlencoded({ extended: false }))

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/users', (req, res) => {
    const html = `
        <ul>
        ${users.map(user => {
           return `<li>${user.first_name}</li>`
        }).join('')}
        </ul>`
    res.send(html)
})

app
    .route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        res.send(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        res.send(`Hello, ${user.first_name} your request is pending`);
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        res.send(`Hello, ${user.first_name} your request is pending`);
    })

app.post('/api/users/', (req, res) => {
    const body = req.body;
    console.log(body);
    users.push({id: users.length + 1,...body})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({success: true, message: 'New user added successfully with id ' + users.length})
    })
})

app.listen(8000, () => console.log('Server Started'))