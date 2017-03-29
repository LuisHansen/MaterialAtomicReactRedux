var initial = { loaded: false, requesting: false, error: false }

export default function (state=initial, action) {
	switch (action.type) {

		// case 'GET_LICENSES':
		// 	if (action.status == 'REQUESTING') {
		// 		return Object.assign({}, state, { requesting: true });
		// 	} else if (action.status == 'SUCCESS') {
		// 		return Object.assign({}, state, { error: false, requesting: false, loaded: true, licenses: action.payload });
		// 	} else if (action.status == 'FAIL') {
		// 		return Object.assign({}, state, { requesting: false, error: true });
		// 	}
		// break;

	}

	return state;
}