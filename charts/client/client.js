window.onload = function() {

	const app = new Vue({
		el: "#msg",
		data: { messages: [] }
	});

	const url = 'http://localhost:1337/msg';

	function refreshMessages() {
		Vue.http.get(url).then(res => {
			app.messages = res.body;
		}, err => {
			console.log(err);
		})
	}

	refreshMessages();

	setInterval(function() {
		refreshMessages();
	}, 10000);


	const app2 = new Vue({
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

	const vm = new Vue({
		el: "#phones",
		data: {
			phonesList : [
			{name: 'iPhone 7'},
			{name: 'Galaxy S8'}
			]
		}
	})

	window.vm = vm;

	/*
		Une instance Vue est un ViewModel
		qui prend en param un objet d'options
		
		On peut créer des composants constructors 
		et les étendre
	*/

	// cool stuff:
	// vm.$el, vm.$data, vm.$watch

	// v-bind shortcut -> :
	// v-on shortcut -> @
};