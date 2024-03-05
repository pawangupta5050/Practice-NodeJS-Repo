const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to this server');
})

app.get('/hello', (req, res) => {
    res.send('Welcome to this server'+ req.query.hello);
})

app.listen(8000, () => console.log('server listening on 8000'))