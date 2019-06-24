const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const http = require('http');
const https = require('https');

//load .env
require('dotenv/config');

//set views folder
app.set('views', path.join(__dirname, 'views'));

//set view engine and allow to use bodyparser
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//set folders for resources
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/jsjquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

//ROUTES
app.get('/', (req, res) => {
    res.redirect('/movies');
});

//IMPORT ROUTES
const movieRoute = require('./routes/movies');
const commentRoute = require('./routes/comments');

// MIDDLEWARES -> function that execute specific
app.use('/movies', movieRoute);
app.use('/comments', commentRoute);

//DB CONNECT 
mongoose.connect(process.env.DBCONNECTION,
    { useNewUrlParser: true },
    () => console.log('Hooray connected to Mongo Atlas!'));

// Listen
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`server runs on ${port}`);
});