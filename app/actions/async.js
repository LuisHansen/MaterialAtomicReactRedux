import fetch from 'isomorphic-fetch'
import { login, getLicenses } from './index'
import { consts } from '../consts/index'
import {reset} from 'redux-form'

const loginAsync = (form) => {
	return function (dispatch) {
		dispatch(login ( { status: 'REQUESTING' } ));
		return fetch(consts.baseUrl + consts.loginUrl, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form)
		}).then(function(response) {
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
					response.json().then(function(json){
						let token = json.token;
						let user = json.user;
						dispatch(login ( { status: 'SUCCESS', token: token, user: user } ));
					})
				break;
			}
		})
	}
}

const getLicensesAsync = (token) => {
	return function (dispatch) {
		dispatch(getLicenses ( { status: 'REQUESTING' } ));
		return fetch(consts.baseUrl + consts.getLicenses, {
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
					response.json().then(function(json){
						let licenses = json
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
		return fetch(consts.baseUrl + consts.tokenUrl, {
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
					response.json().then(function(json){
						let user = json.user;
						dispatch(login ( { status: 'SUCCESS', user: user } ));
					})
				break;
			}
		})
	}
}

export { loginAsync, tryFirstLoginAsync, getLicensesAsync }