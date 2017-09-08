import fetch from 'isomorphic-fetch'
import { login, getLicenses, fetchSummaryToday, getDrilldown, getWarnings, getFailures, getCockpit } from './index'
import {reset} from 'redux-form'
var consts = require('../consts/index');

const loginAsync = (form) => {
	return function (dispatch) {
		dispatch(login ( { status: 'REQUESTING' } ));

		return fetch(consts.thisUrl + consts.loginUrl, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form)
		}).then(function(response) {

			let json = null;

			return response.json().then(function(json) {

				switch (response.status) {
					case 401:
						dispatch(reset('login'));
						dispatch(login ( { status: 'FAIL' } ));
					break;
					case 400:
						dispatch(reset('login'));
						dispatch(login ( { status: 'FAIL' } ));
					break;
					case 200:
						let token = json.token;
						let user = json.user;
						dispatch(login ( { status: 'SUCCESS', token: token, user: user } ));
					break;
				}

				return 0;

			})
		})
	}
}

const getDrilldownAsync = (date1, date2, token) => {
	return function (dispatch) {
		dispatch(getDrilldown( { status: 'REQUESTING' } ));

		return fetch(consts.thisUrl + consts.drilldownUrl + "/" + date1 + "/" + date2, {
			method: 'GET',
			headers: {
				'Authorization': token
			}
		}).then(function(response) {
			switch (response.status) {
				case 200:
					return response.json().then(function(json) {
						dispatch(getDrilldown( { status: 'SUCCESS', data: json } ));
					})
				break;

				default:
					dispatch(getDrilldown( { status: 'FAIL' } ));
				break;
			}
		})
	}
}

const getCockpitAsync = (date, token) => {
	let data = {};
	return function (dispatch) {
		dispatch(getCockpit( { status: 'REQUESTING' } ));

		return fetch(consts.thisUrl + consts.cockpitClients + "/" + date, {
			method: 'GET',
			headers: {
				'Authorization': token
			}
		}).then(function(response) {
			switch (response.status) {
				case 200:
					return response.json().then(function(json) {
						data.clients = json; // Add to the data
						return fetch(consts.thisUrl + consts.cockpitSpace + "/" + date, {
							method: 'GET',
							headers: {
								'Authorization': token
							}
						}).then(function(response) {
							switch (response.status) {
								case 200:
									return response.json().then(function(json) {
										data.space = json; // Add to the data
										return fetch(consts.thisUrl + consts.cockpitTime + "/" + date, {
											method: 'GET',
											headers: {
												'Authorization': token
											}
										}).then(function(response) {
											switch (response.status) {
												case 200:
													return response.json().then(function(json) {
														data.time = json; // Add to the data
														return fetch(consts.thisUrl + consts.cockpitErrors + "/" + date, {
															method: 'GET',
															headers: {
																'Authorization': token
															}
														}).then(function(response) {
															switch (response.status) {
																case 200:
																	return response.json().then(function(json) {
																		data.errors = json;
																		dispatch(getCockpit( { status: 'SUCCESS', data: data } ));
																	})
																break;

																default:
																	dispatch(getCockpit( { status: 'FAIL' } ));
																break;
															}
														})
													})
												break;

												default:
													dispatch(getCockpit( { status: 'FAIL' } ));
												break;
											}
										})
									})
								break;

								default:
									dispatch(getCockpit( { status: 'FAIL' } ));
								break;
							}
						})
					})
				break;

				default:
					dispatch(getCockpit( { status: 'FAIL' } ));
				break;
			}
		})
	}
}

const getWarningsAsync = (date, token) => {
	return function (dispatch) {
		dispatch(getWarnings( { status: 'REQUESTING' } ));

		return fetch(consts.thisUrl + consts.warningsUrl + "/" + date, {
			method: 'GET',
			headers: {
				'Authorization': token
			}
		}).then(function(response) {
			switch (response.status) {
				case 200:
					return response.json().then(function(json) {
						dispatch(getWarnings( { status: 'SUCCESS', data: json } ));
					})
				break;

				default:
					dispatch(getWarnings( { status: 'FAIL' } ));
				break;
			}
		})
	}
}

const getFailuresAsync = (date, token) => {
	return function (dispatch) {
		dispatch(getFailures( { status: 'REQUESTING' } ));

		return fetch(consts.thisUrl + consts.failuresUrl + "/" + date, {
			method: 'GET',
			headers: {
				'Authorization': token
			}
		}).then(function(response) {
			switch (response.status) {
				case 200:
					return response.json().then(function(json) {
						dispatch(getFailures( { status: 'SUCCESS', data: json } ));
					})
				break;

				default:
					dispatch(getFailures( { status: 'FAIL' } ));
				break;
			}
		})
	}
}

const getSummaryAsync = (date1, date2, token) => {
	return function (dispatch) {
		dispatch(fetchSummaryToday ( { type: 'SUMMARY_TODAY', status: 'REQUESTING' } ));

		return fetch(consts.thisUrl + consts.summaryTodayUrl + "/" + date1 + "/" + date2, {
			method: 'GET',
			headers: {
				'Authorization': token
			}
		}).then(function(response) {
			switch (response.status) {
				case 400:
					dispatch(fetchSummaryToday ( { type: 'SUMMARY_TODAY', status: 'FAIL' }));
				break;
				case 401:
					dispatch(fetchSummaryToday ( { type: 'SUMMARY_TODAY', status: 'FAIL' }));
				break;
				case 200:
					return response.json().then(function(json) {
						let data = json;
						dispatch(fetchSummaryToday ( { type: 'SUMMARY_TODAY', status: 'SUCCESS', data: data }));
					})
				break;
			}
		})
	}
}

const getLicensesAsync = (token) => {
	return function (dispatch) {
		dispatch(getLicenses ( { status: 'REQUESTING' } ));
		return fetch(consts.thisUrl + consts.getLicenses, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': token
			}
		}).then(function(response) {
			switch (response.status) {
				case 401:
					dispatch(getLicenses ( { status: 'FAIL' } ));
				break;
				case 400:
					dispatch(getLicenses ( { status: 'FAIL' } ));
				break;
				case 200:
					return response.json().then(function(json){
						let licenses = json;
						dispatch(getLicenses ( { status: 'SUCCESS', licenses: licenses } ));
					})
				break;
			}
		})
	}
}

const tryFirstLoginAsync = (token) => {
	return function (dispatch) {
		dispatch(login( { status: 'REQUESTING' } ));
		return fetch(consts.thisUrl + consts.tokenUrl, {
			method: 'GET',
			headers: {
				'Authorization': token
			}
		}).then(function(response) {
			switch (response.status) {
				case 401:
					dispatch(login( { status: 'NO_TOKEN' }));
				break;
				case 200:
					return response.json().then(function(json){
						let user = json.user;
						dispatch(login ( { status: 'SUCCESS', user: user } ));
					})
				break;
			}
		})
	}
}

export { loginAsync, tryFirstLoginAsync, getLicensesAsync,
		getSummaryAsync, getDrilldownAsync, getWarningsAsync,
		getFailuresAsync, getCockpitAsync }