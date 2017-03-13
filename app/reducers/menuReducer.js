var initial = {
	pages: [{title: "Home", template: "Home", icon:"home"}, {title: "Payments", template: "Payments", icon: "credit_card"}, {title: "Nature", template: "Nature", icon: "nature_people"}]
}

var vazio = { pages : [] };

export default function (state=vazio, action) {
	switch (action.type) {

		case 'LOAD_MENU':
			return initial;
		break;

	}

	return state;
}