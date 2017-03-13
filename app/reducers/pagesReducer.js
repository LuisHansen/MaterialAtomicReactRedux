var initial = {
	title: "Home",
	template: "Home",
	icon: "home"
}

export default function (state=initial, action) {
	switch (action.type) {
		case 'MENU':
			return action.payload;
		break;
	}

	return state;
}