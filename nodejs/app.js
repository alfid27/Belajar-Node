var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require ('./config/database');
var bodyParser = require('body-parser')
var session = require('express-session')
const { check, validationResult } = require('express-validator');


// Mongodb
mongoose.connect(config.database);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDb')
});

var app = express();

// Body-Parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// -end

//express Session
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
  }))


//Express Massage
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});  

//Express Validator
app.use(validation());


//-END-\\

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var Page = require('./models/pages');
var pages = require('./Routes/pages.js');
var pagesadmin = require('./Routes/admin_pages.js');

app.use('/', pages);
app.use('/admin', pagesadmin);

app.use('/', pages);
app.use('/admin', pagesadmin);

var port = 3000;
app.listen(port, function(){
	console.log('server berjalan dengan port' + port);
});