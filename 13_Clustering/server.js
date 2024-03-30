const cluster = require('node:cluster');
const express = require('express');

const os = require('os');

const totalCPU = os.cpus().length;

// console.log(cluster)

if (cluster.isPrimary) {
    for (let i = 0; i < totalCPU; i++) {
        cluster.fork();
    }
} else {
    console.log('Entered in this code')
    const app = express();

    app.get('/', (req, res) => {
        res.json({ message: `Hello server ${process.pid} ` })
    })

    app.listen(8000, () => {
        console.log('listening on port 8000');
    })
}