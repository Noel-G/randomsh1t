var getMessage = new XMLHttpRequest();
var messageElement;
var prettyMessage;

getMessage.onreadystatechange = function() {
	if(getMessage.readyState != 4 || getMessage.status != 200) return;
	console.log('Success: ' + getMessage.response);
	console.log(getMessage);

	prettyMessage = JSON.parse(getMessage.response);
	messageElement = document.getElementById('msg');
	messageElement.innerHTML = "Message: " + prettyMessage[0].content;

}

getMessage.open('GET', 'http://localhost:1337/msg', true);
getMessage.send(null);