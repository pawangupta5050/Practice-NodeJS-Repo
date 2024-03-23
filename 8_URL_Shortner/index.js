const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser');
const { db } = require('./connection.js')
const urlRouter = require('./routes/url.js')
const userRouter = require('./routes/user.js')
const staticRoute = require('./routes/staticRouter.js')
const {  checkForAuthentication,  restrictTo } = require('./middleware/auth.js')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./view'))

db().then(() => console.log('Connections established')).catch(err => console.error(err))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkForAuthentication)

app.use('/', staticRoute)

app.use('/api/url', restrictTo(["NORMAL", "ADMIN"]), urlRouter)

app.use('/api/user', userRouter)

app.listen(8000, () => console.log('listening on 8000'));