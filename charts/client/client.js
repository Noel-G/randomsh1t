window.onload = function() {

	var getMessage = new XMLHttpRequest();
	var messageElement;
	var prettyMessage;

	getMessage.onreadystatechange = function() {
		if(getMessage.readyState != 4 || getMessage.status != 200) return;
		
		prettyMessage = JSON.parse(getMessage.response);

		var app = new Vue({
			el: "#msg",
			data: function() {
				return {
					messages: prettyMessage
				}
			}
		});
	}

	getMessage.open('GET', 'http://localhost:1337/msg', true);
	getMessage.send(null);
};