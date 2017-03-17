var initial = {
	pages: [{title: "Home", template: "Home", icon:"home"}, {title: "Payments", template: "Payments", icon: "credit_card"}, {title: "Nature", template: "Nature", icon: "nature_people"}, {title: "Control Panel", template: "Graphs", icon: "insert_chart"}]
}

var empty = { style: "big", pages : [] };

export default function (state=empty, action) {
	switch (action.type) {

		case 'LOAD_MENU':
			return Object.assign({}, state, initial);
		break;

		case 'CHANGE_COMPACT':
			let config = Object.assign({}, JSON.parse(localStorage.getItem("settings")), { compact: action.payload == "compact" });
			localStorage.setItem("settings", JSON.stringify(config));
			return Object.assign({}, state, { style: action.payload == "compact" ? "small" : "big" });
		break;

		case 'APPLY_SETTINGS':
			let settings = action.payload;
			if (settings && settings.compact) {
				return Object.assign({}, state, { style: "small" });
			}
	}

	return state;
}