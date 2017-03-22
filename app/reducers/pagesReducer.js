var initial = {}

export default function (state=initial, action) {
	switch (action.type) {
		case 'INIT':
			return action.payload;
		break;
		case 'MENU':
			return action.payload;
		break;
		case 'LOGOUT':
			return initial;
		break;
	}

	return state;
}