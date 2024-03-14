const express = require('express');
const { db } = require('./connection.js')
const { logReqRes } = require('./middlewares');
const userRoute = require('./routes/user.js');
const app = express();

db().then(() => console.log('Connetion established')).catch((err) => console.log(err))

app.use(express.urlencoded({extended: false}))
app.use(logReqRes('log.txt'))

app.use('/api/users', userRoute);

app.listen(8000, () => console.log('listening on 8000'))