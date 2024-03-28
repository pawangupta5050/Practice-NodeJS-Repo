const http = require('http');
const express = require('express')
const { Server } = require('socket.io');
const path = require('path')
const app = express();
const server = http.createServer(app)

const io = new Server(server)

io.on('connection', socket => {
    socket.on('userMessage', message => {
        console.log(message)
        io.emit('message', message);
    })
})

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    return res.sendFile('/index.html');
})


server.listen(9000, () => console.log('listening on port 9000'))