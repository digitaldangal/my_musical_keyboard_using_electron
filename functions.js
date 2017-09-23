document.onkeydown = function(e) {
	switch (e.keyCode)
		case 65: 
			document.getElementById('A').play();
			break;

		default:
			console.log("Unknown key :(")
}