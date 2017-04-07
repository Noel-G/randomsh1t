window.onload = function() {

	var getMessage = new XMLHttpRequest();
	var messageElement;
	var prettyMessage;

	getMessage.onreadystatechange = function() {
		if(getMessage.readyState != 4 || getMessage.status != 200) return;
		
		prettyMessage = JSON.parse(getMessage.response);

		var app = new Vue({
			el: "#msg",
			data: { messages: prettyMessage }
		});
	}
	

	var app2 = new Vue({
		el: "#userinput",
		data: { text : "hello" },
		methods: {
			toUpper: function() {
				this.text = this.text.toUpperCase()
			}
		}
	})

	Vue.component('phones-list', {
		props: ['phone'],
		template: '<li>{{ phone.name }}</li>'

	})

	new Vue({
		el: "#phones",
		data: {
			phonesList : [
				{name: 'iPhone 7'},
				{name: 'Galaxy S8'}
			]
		}
	})

	getMessage.open('GET', 'http://localhost:1337/msg', true);
	getMessage.send(null);
};