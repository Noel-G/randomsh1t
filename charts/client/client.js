window.onload = function() {

	const app = new Vue({
		el: "#msg",
		data: { messages: [] }
	});

	const getMsgUrl = 'http://localhost:1337/api/messages';

	function refreshMessages() {
		Vue.http.get(getMsgUrl).then(res => {
			app.messages = res.body;
		}, err => {
			console.log(err);
		})
	}

	refreshMessages();

	setInterval(function() {
		refreshMessages();
	}, 600000);


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

	// v-if, v-else, v-else-if
	// v-if sur un ensemble de balises : <template v-if="..."> [...] </template>

	// idem pour v-for
};