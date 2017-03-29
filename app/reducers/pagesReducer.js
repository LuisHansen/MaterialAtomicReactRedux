var initial = {}

export default function (state=initial, action) {
	switch (action.type) {
		case 'INIT':
			return initial;
		break;
		case 'MENU':
			return action.payload;
		break;
		case 'LOGOUT':
			$('.tooltipped').tooltip('remove');
			return initial;
		break;
	}

	return state;
}