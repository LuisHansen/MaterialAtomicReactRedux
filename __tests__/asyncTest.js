import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as async from '../app/actions/async'
import ServerMock from 'mock-http-server'
import expect from 'expect'
import request from 'request'
var http = require('http');
var consts = require('../app/consts/index');

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

	var server = new ServerMock({ host: "localhost", port: 4040 });
	let app = require('../app');
	app.set('port', '3000');
	let thisserver = http.createServer(app);

	beforeAll(() => {
		thisserver.listen('3000');
		server.start(() => { return null });
	})

	afterAll(() => {
		thisserver.close();
		server.stop(() => { return null });
	})

	it('creates LOGIN with SUCCESS status when logging in is done', () => {
		let body = JSON.stringify({ "token": "mockToken", "user": {} });
		
		server.on({
            method: 'POST',
            path: consts.loginUrl,
            reply: {
                status:  200,
                headers: { "content-type": "application/json" },
                body: body
            }
        });


		const expectedActions = [
			{ type: 'LOGIN', status: 'REQUESTING', payload: { token: undefined, user: undefined } },
			{ type: 'LOGIN', status: 'SUCCESS', payload: { token: 'mockToken', user: {} } }
		]

		const store = mockStore({ login: false, error: false })

		return store.dispatch(async.loginAsync({ username: "user", password: "password" }))
		.then(() => { // return of async actions
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it('creates LOGIN with FAIL status when logging in fails', () => {
		let body = JSON.stringify({ "token": "mockToken", "user": {} });
		
		server.on({
            method: 'POST',
            path: consts.loginUrl,
            reply: {
                status:  401,
                headers: { "content-type": "application/json" },
                body: body
            }
        });


		const expectedActions = [
			{ type: 'LOGIN', status: 'REQUESTING', payload: { token: undefined, user: undefined } },
			{ meta: { form: 'login' }, type: '@@redux-form/RESET' },
			{ type: 'LOGIN', status: 'FAIL', payload: { token: undefined, user: undefined } }
		]

		const store = mockStore({ login: false, error: false })

		return store.dispatch(async.loginAsync({ username: "user", password: "password" }))
		.then(() => { // return of async actions
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it('creates LOGIN with SUCCESS status when logging in with previous token', () => {
		let body = JSON.stringify({ "user": {} });
		
		server.on({
            method: 'GET',
            path: consts.tokenUrl,
            reply: {
                status:  200,
                headers: { "content-type": "application/json" },
                body: body
            }
        });


		const expectedActions = [
			{ type: 'LOGIN', status: 'REQUESTING', payload: { token: undefined, user: undefined } },
			{ type: 'LOGIN', status: 'SUCCESS', payload: { token: undefined, user: {} } }
		]

		const store = mockStore({ login: false, error: false })

		return store.dispatch(async.tryFirstLoginAsync({ token: "mockToken" }))
		.then(() => { // return of async actions
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it('creates LOGIN with NO_TOKEN status when logging in with previous token', () => {
		
		server.on({
            method: 'GET',
            path: consts.tokenUrl,
            reply: {
                status:  401
            }
        });


		const expectedActions = [
			{ type: 'LOGIN', status: 'REQUESTING', payload: { token: undefined, user: undefined } },
			{ type: 'LOGIN', status: 'NO_TOKEN', payload: { token: undefined, user: undefined } }
		]

		const store = mockStore({ login: false, error: false })

		return store.dispatch(async.tryFirstLoginAsync({ token: "mockToken" }))
		.then(() => { // return of async actions
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it('creates GET_LICENSES with SUCCESS status when getting licenses with valid token', () => {

		server.on({
            method: 'GET',
            path: consts.getLicenses,
            reply: {
                status:  200,
                body: "[]"
            }
        });


		const expectedActions = [
			{ type: 'GET_LICENSES', status: 'REQUESTING', payload: undefined },
			{ type: 'GET_LICENSES', status: 'SUCCESS', payload: [] }
		]

		const store = mockStore({ loaded: false, requesting: false, error: false })

		return store.dispatch(async.getLicensesAsync({ token: "mockToken" }))
		.then(() => { // return of async actions
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	it('creates GET_LICENSES with FAIL status when getting licenses without valid token', () => {

		server.on({
            method: 'GET',
            path: consts.getLicenses,
            reply: {
                status:  401
            }
        });


		const expectedActions = [
			{ type: 'GET_LICENSES', status: 'REQUESTING', payload: undefined },
			{ type: 'GET_LICENSES', status: 'FAIL', payload: undefined }
		]

		const store = mockStore({ loaded: false, requesting: false, error: false })

		return store.dispatch(async.getLicensesAsync({ token: "" }))
		.then(() => { // return of async actions
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

});