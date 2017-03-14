var initial = {
	aaSorting: [],
	aaData: [
	    [
	        "Tiger Nixon",
	        "System Architect"
	    ],
	    [
	        "Garrett Winters",
	        "Director"
	    ],
	    [
	        "Garrett Summers",
	        "Co-director"
	    ],
	    [
	        "Joseph Winters",
	        "Politician"
	    ]
	]
};

var empty = {};

export default function (state=empty, action) {
	switch (action.type) {
		case 'LOAD_TABLE':
			return initial;
		break;
	}

	return state;
}