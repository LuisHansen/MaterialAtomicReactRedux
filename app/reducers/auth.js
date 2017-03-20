var initial = {
	login: false
}

export default function auth(state=initial, action) {
	switch (action.type) {

		case 'LOGIN':
			if (action.status == 'REQUESTING') {
				return Object.assign({}, state, { requesting: true });
			} else if (action.status == 'SUCCESS') {
				if (action.payload)
					localStorage.setItem("token", action.payload); // Save auth token
				return Object.assign({}, state, { requesting: false, login: true });
			} else if (action.status == 'FAIL') {
				return Object.assign({}, state, { requesting: false, error: true });
			} else if (action.status == 'NO_TOKEN') {
				return Object.assign({}, state, { requesting: false });
			}
		break;

		case 'LOGOUT':
			localStorage.removeItem("token");
			return Object.assign({}, state, { login: false });
		break;

		case 'PERMISSION':
			// TODO - verificar se tem permissão para fazer algo
		break;
	}

	return state;
}