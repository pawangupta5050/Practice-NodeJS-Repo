const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    console.log(myUrl.query);
    res.end('hello world');
    console.log('Received request');
})

server.listen(8000, () => console.log('server started'))