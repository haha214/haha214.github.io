var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('/post', {});
});

router.post('/', function(req, res, next) {
	request.post({
		url: 'http://104.194.79.57/demo/?service=Group.Posts',
		formData: {
			group_base_id: req.param('groupid'),
			title: req.param('title'),
			text: req.param('text')
		}
	}, function optionalCallback(err, httpResponse, body) {
		if (err) {
			console.error('Login failed:', err);
			next(err);
		}
		var result = JSON.parse(body);
		if (result.ret == 200 && result.msg == "") {
			res.render('/postDetail/' + result.data.info.post_base_id);
		}else{
			next();
		}
	});

});

module.exports = router;