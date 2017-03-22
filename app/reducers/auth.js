var initial = {
	login: false,
	error: false
}

export default function (state=initial, action) {
	switch (action.type) {

		case 'LOGIN':
			if (action.status == 'REQUESTING') {
				return Object.assign({}, state, { requesting: true });
			} else if (action.status == 'SUCCESS') {
				if (action.payload.token) {
					localStorage.setItem("token", action.payload.token); // Save auth token
				}
				let user = action.payload.user;
				return Object.assign({}, state, { requesting: false, login: true, user: user });
			} else if (action.status == 'FAIL') {
				return Object.assign({}, state, { requesting: false, error: true });
			} else if (action.status == 'NO_TOKEN') {
				return Object.assign({}, state, { requesting: false });
			}
		break;

		case 'LOGOUT':
			localStorage.removeItem("token");
			return Object.assign({}, state, { login: false, user: null, error: false });
		break;

		case 'PERMISSION':
			// TODO - verify user permissions
		break;
	}

	return state;
}