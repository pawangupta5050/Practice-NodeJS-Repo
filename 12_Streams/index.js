const express = require('express');
const app = express();
const fs = require('fs');
const zlib = require('zlib');
const status = require('express-status-monitor')

app.use(status())

fs.createReadStream('./sample.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('./sample.zip')))

app.get('/', (req, res) => {
    // fs.readFile('./sample.txt', (err, data) => {
    //     fs.writeFile('./sample2.txt', data, 'utf-8', (err, data) => {
    //         res.end('success')
    //     });
        
    // });
    const stream = fs.createReadStream('./sample.txt', 'utf-8')
    stream.on('data', chunk => {
        res.write(chunk)
    })

    stream.on('end', () => res.end())
})

app.listen(8000, () => console.log('listening on port 8000'));