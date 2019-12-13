var express = require('express');
var router = express.Router();

router.get('/', function(req, res){ 
	// res.send('Hello World');
	res.render('index', {
		h1 : 'Welcome'
	});
});

router.get('/product', function(req, res){ 
	// res.send('Hello World');
	res.render('index', {
		h1 : 'Our Product'
	});
});
module.exports = router;