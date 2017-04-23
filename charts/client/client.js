window.onload = function() {

	const messagesUrl = 'http://localhost:1337/api/messages';

	const app = new Vue({
		el: "#msg",
		data: { 
			messages: [],
			new_message: "",
			btnAvailable: true
		},
		methods: {
			sendMessage: function() {
				if(this.btnAvailable && this.new_message != "") {
					this.btnAvailable = false;
					this.$http.post(messagesUrl, {content: this.new_message}).then(res => {
						this.new_message = "";
						this.messages.push(res.body);
						this.btnAvailable = true;
					}, err => {
						console.log(err);
					})
				}

			},
			deleteMessage: function(id) {
				Vue.http.delete(messagesUrl + '/' + id).then(res => {
					this.messages = this.messages.filter(function(msg) {
						return msg.id != id
					});
				}, err => {
					console.log(err);
				})
			}
		}
	});


	function refreshMessages() {
		Vue.http.get(messagesUrl).then(res => {
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