const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage })

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    return res.render('home')
});

app.post('/upload', upload.single('profileImage'), (req, res) => { // for single file upload
    // app.post('/upload', upload.fields([{name: 'profilePhoto'}, {name: 'coverPhoto'}]), (req, res) => { // for single file upload
    console.log(req.body)
    console.log(req.file)
    return res.redirect('/')
});

app.listen('8000', () => console.log('listening on 8000'))