var initial = {
	fullscreen: false
}

export default function (state=initial, action) {
	switch (action.type) {

		case 'FULLSCREEN':
			if (action.payload == "enter") {
				let elem = document.getElementsByTagName("body")[0];
				if (elem.requestFullscreen) {
				  elem.requestFullscreen();
				} else if (elem.msRequestFullscreen) {
				  elem.msRequestFullscreen();
				} else if (elem.mozRequestFullScreen) {
				  elem.mozRequestFullScreen();
				} else if (elem.webkitRequestFullscreen) {
				  elem.webkitRequestFullscreen();
				}
				return Object.assign({}, state, { fullscreen: true });
			} else if (action.payload == "exit") {
				if (document.exitFullscreen) {
		            document.exitFullscreen();
		        } else if (document.webkitExitFullscreen) {
		            document.webkitExitFullscreen();
		        } else if (document.mozCancelFullScreen) {
		            document.mozCancelFullScreen();
		        } else if (document.msExitFullscreen) {
		            document.msExitFullscreen();
		        }
		        return Object.assign({}, state, { fullscreen: false });
			}
		break;
	}

	return state;
}