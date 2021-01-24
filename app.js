//git add // How to git commit 
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

app.get('/homepage', (req, res) => {
    res.render('homepage');
});

app.get('/rewards', (req, res) => {
    res.render('rewards');
});

app.get('/staymotivated', (req, res) => {
    res.render('stay_motivated');
});

app.get('/', (req, res) => {

    res.sendFile('./views/index.html', {
        root: __dirname
    });
});


app.get('/toolsforyourstudy', (req, res) => {

    res.sendFile('./views/Tools_for_your_study.html', {
        root: __dirname
    });
});

app.get('/upload', (req, res) => {

    res.sendFile('./views/Upload.html', {
        root: __dirname
    });
});

app.get('/tuneyourmind', (req, res) => {

    res.sendFile('./views/construction.html', {
        root: __dirname
    });
});


app.get('/timerpage', (req, res) => {

    res.sendFile('./views/timer.html', {
        root: __dirname
    });
});

app.use((req, res) => {

    res.status(404).sendFile('./views/404.html', {
        root: __dirname
    })
})