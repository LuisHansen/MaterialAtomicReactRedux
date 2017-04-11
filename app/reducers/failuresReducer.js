var initial = { loaded: false, requesting: false, error: false }

export default function (state=initial, action) {
	switch (action.type) {
		case 'GET_FAILURES':
			switch (action.status) {
				case 'REQUESTING':
					return Object.assign({}, state, { loaded: false, requesting: true, error: false })
				break;

				case 'SUCCESS':
					return Object.assign({}, state, { loaded: true, requesting: false, error: false, data: action.data })
				break;

				case 'FAIL':
					return Object.assign({}, state, { loaded: false, requesting: false, error: true })
				break;
			}
		break;
	}

	return state;
}