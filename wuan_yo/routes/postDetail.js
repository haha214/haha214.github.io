var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	request("http://104.194.79.57/demo/?service=Post.GetPostBase&post_id=" + req.param('id'),
		function(err, response, body) {
			if (!err && response.statusCode == 200) {
				var result = JSON.parse(body);
				if (result.ret == 200 && result.msg == "") {
					res.render('postDetail/' + req.param('id'), result.data);
				} else {
					console.error('post failed:', err);
					next();
				}
			}
		});
});

module.exports = router;