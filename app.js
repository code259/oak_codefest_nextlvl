// How to git commit 
// git add . ( here type what to add )
// 1. git commit -m "type commit here"
// 2. git push -u origin main

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.listen(8080);

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));


app.get('/', (req, res) => {

    res.sendFile('./views/index.html', {
        root: __dirname
    });
});

app.get('/authentication', (req, res) => {
    res.render('authentication');
});