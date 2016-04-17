var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/:method', function(req, res, next) {
	var data = {};
	switch (req.params.method) {
		case 'getindex':
			var pn = req.param('currentpage');
			request('http://104.194.79.57/?service=Post.GetIndexPost&pn=' + pn, function(error, response, body) {
				if (!error && response.statusCode == 200) {
					console.log(JSON.parse(body)); // Show the HTML for the Google homepage. 
					res.header('Content-type', 'application/json');
					res.header('Charset', 'utf8');
					res.send(body);
				}
			})
			break;
		default:
			res.send('respond with a resource');
			break;
	}

});

module.exports = router;