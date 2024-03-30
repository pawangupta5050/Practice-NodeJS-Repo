const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: `Hello server ${process.pid} `})
})

app.listen(8000, () => {
    console.log('listening on port 8000');
})