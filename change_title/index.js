var title = document.title;
var blurMessage = [
	'Porfavor vuelve! :-( ',
	'¿Ya no me quieres? :-(',
	'¿Cookie? ',
	'¿Seguro que te vas? :-( ',
];

var intervalTimer = null;
var timeoutTimer = null;

window.addEventListener("blur", function () {
	intervalTimer = setInterval(function () {
		var rand = Math.floor((Math.random() * blurMessage.length));
		document.title = blurMessage[rand];
		timeoutTimer = setTimeout(function () {
			document.title = title;
		}, 400);
	}, 1200);
});

window.addEventListener("focus", function () {
	clearInterval(intervalTimer);
	clearTimeout(timeoutTimer);
	document.title = title;
});