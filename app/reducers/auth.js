var initial = {
	login: false
}

export default function auth(state=initial, action) {
	switch (action.type) {

		case 'LOGIN':
			if (action.status == 'REQUESTING') {
				return Object.assign({}, state, { requesting: true });
			} else if (action.status == 'SUCCESS') {
				return Object.assign({}, state, { requesting: false, login: true, auth: action.payload });
			} else if (action.status == 'FAIL') {
				// TODO - tratar erro de login, falta de permissão, etc.
			}
		break;

		case 'LOGOUT':
			// TODO
		break;

		case 'PERMISSION':
			// TODO - verificar se tem permissão para fazer algo
		break;
	}

	return state;
}