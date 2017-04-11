var config = require('../../config.js');

const consts = {
	baseUrl: config.host, //'http://localhost:4040', //'192.168.50.4:4040',
	loginUrl: '/api/modules/auth/login',
	tokenUrl: '/api/modules/auth/token',
	getLicenses: '/api/modules/license',
	summaryTodayUrl: '/api/modules/dashboard/jobs',
	drilldownUrl: '/api/modules/dashboard/jobs/drilldown',
	warningsUrl: '/api/modules/dashboard/warnings',
	thisUrl: 'http://localhost:3000',
	failuresUrl: '/api/modules/dashboard/failures'
}

module.exports = consts;