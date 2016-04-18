var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res, next) {
    request.post({
        url: 'http://104.194.79.57/demo/?service=Group.UStatus'
        
    }, function optionalCallback(err, httpResponse, body) {
        if (err) {
            console.error('Login failed:', err);
            res.header('Content-type', 'application/json');
            res.header('Charset', 'utf8');
            res.send({
                err: err
            });
        }
        console.log('Login status:', JSON.parse(body));
        res.header('Content-type', 'application/json');
        res.header('Charset', 'utf8');
        res.send(JSON.parse(body));
    });

});

module.exports = router;