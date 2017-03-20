var express = require('express');
var router = express.Router();
var request = require('request');
var httpStatus = require('http-status');

router.route('/modules/auth/login')
	/* POST /api/modules/auth/login */
	.post(function(req, res, next) {
		request.post('http://127.0.0.1:4040/api/modules/auth/login', { form: req.body }, function (err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body)
		});
	})

router.route('/modules/auth/token')
	/* GET /api/modules/auth/token */
	.get(function(req, res, next) {
		request.get('http://127.0.0.1:4040/api/modules/auth/token', { headers: req.headers }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body)
		});
	})

module.exports = router;