//dependencies:
var express = require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

//connecct to mongoDb:
mongoose.connect('mongodb://bogu:haslo@ds013414.mlab.com:13414/bogubase');

//express:
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
app.use('/api',require('./routes/api'));

//start server:
app.listen(1000);
console.log('Server is running on port 1000');