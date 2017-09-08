var express = require('express');
var router = express.Router();
var request = require('request');
var httpStatus = require('http-status');
var consts = require('../app/consts/index');

router.route('/modules/auth/login')
	/* POST /api/modules/auth/login */
	.post(function(req, res, next) {
		request.post(consts.baseUrl + '/api/login', { form: req.body }, function (err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(JSON.parse(body))
		});
	})

router.route('/modules/auth/token')
	/* GET /api/modules/auth/token */
	.get(function(req, res, next) {
		request.get(consts.baseUrl + '/api/token', { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body)
		});
	})

router.route('/modules/users')
	/** GET /api/modules/users */
	.get(function(req, res, next) {
		request.get(consts.baseUrl + '/api/users', { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	})

router.route('/modules/license')
	/** GET /api/modules/users */
	.get(function(req, res, next) {
		request.get(consts.baseUrl + '/api/license', { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	})

router.route('/modules/dashboard/jobs/:start/:end')
	/** GET /api/modules/dashboard/jobs/:start/:end */
	.get(function(req, res, next) {
		let start = req.params.start;
		let end = req.params.end;
		request.get(consts.baseUrl + '/api/dashboard/jobs/' + start + "/" + end, { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	})

router.route('/modules/dashboard/jobs/drilldown/:start/:end')
	/** GET /api/modules/dashboard/jobs/drilldown/:start/:end */
	.get(function(req, res, next) {
		let start = req.params.start;
		let end = req.params.end;
		request.get(consts.baseUrl + '/api/dashboard/jobs/drilldown/' + start + "/" + end, { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	})

router.route('/modules/dashboard/warnings/:date')
	/** GET /api/modules/dashboard/warnings/:date */
	.get(function(req, res, next) {
		let date = req.params.date;
		request.get(consts.baseUrl + '/api/dashboard/warnings/' + date, { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	})

router.route('/modules/dashboard/failures/:date')
	/** GET /api/modules/dashboard/failures/:date */
	.get(function(req, res, next) {
		let date = req.params.date;
		request.get(consts.baseUrl + '/api/dashboard/failures/' + date, { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	})

router.route('/modules/cockpit/clients/:date')
	/** GET /api/modules/cockpit/clients/:date */
	.get(function(req, res, next) {
		let date = req.params.date;
		request.get(consts.baseUrl + '/api/cockpit/clients/' + date, { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	});

router.route('/modules/cockpit/policy/space/:date')
	/** GET /api/modules/cockpit/policy/space/:date */
	.get(function(req, res, next) {
		let date = req.params.date;
		request.get(consts.baseUrl + '/api/cockpit/policy/space/' + date, { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	});

router.route('/modules/cockpit/policy/time/:date')
	/** GET /api/modules/cockpit/policy/time/:date */
	.get(function(req, res, next) {
		let date = req.params.date;
		request.get(consts.baseUrl + '/api/cockpit/policy/time/' + date, { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	});

router.route('/modules/cockpit/errors/:date')
	/** GET /api/modules/cockpit/errors/:date */
	.get(function(req, res, next) {
		let date = req.params.date;
		request.get(consts.baseUrl + '/api/cockpit/errors/' + date, { headers: Object.assign(req.headers, { 'Accept-Encoding': 'application/json' }) }, function(err, httpResponse, body) {
			res.status(httpResponse.statusCode).send(body);
		});
	});

module.exports = router;