var config = require('../../config.js');

const consts = {
	baseUrl: config.host, //'http://localhost:4040', //'192.168.50.4:4040',
	loginUrl: '/api/modules/auth/login',
	tokenUrl: '/api/modules/auth/token',
	getLicenses: '/api/modules/license',
	summaryTodayUrl: '/api/modules/dashboard/jobs',
	drilldownUrl: '/api/modules/dashboard/jobs/drilldown',
	warningsUrl: '/api/modules/dashboard/warnings',
	thisUrl: config.thisHost,
	failuresUrl: '/api/modules/dashboard/failures',
	cockpitClients: '/api/modules/cockpit/clients',
	cockpitSpace: '/api/modules/cockpit/policy/space',
	cockpitTime: '/api/modules/cockpit/policy/time',
	cockpitErrors: '/api/modules/cockpit/errors'
}

module.exports = consts;