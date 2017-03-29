var commom = {
	pages: [{title: "Home", template: "Home", icon:"home"}, {title: "Dashboard", template: "Dashboard", icon:"dashboard"}, {title: "Payments", template: "Payments", icon: "credit_card"}, {title: "Nature", template: "Nature", icon: "nature_people"}, {title: "Control Panel", template: "Graphs", icon: "insert_chart"}]
}

var admin = {
	pages: [{title: "Admin", template: "Admin", icon: "settings_applications"}]
}

var veritas = {
	pages: [{title: "Licenses", template: "Licenses", icon: "vpn_key"}]
}

var empty = { style: "big", pages : [] };

export default function (state=empty, action) {
	switch (action.type) {

		case 'LOAD_MENU':
			if (action.payload == 'ADMIN') {
				let menu = Object.assign({}, state, commom);
				menu.pages = menu.pages.concat(admin.pages);	
				return menu;
			} else if (action.payload == 'VERITAS') {
				return Object.assign({}, state, veritas);
			}
			return Object.assign({}, state, commom);
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
		break;
	}

	return state;
}