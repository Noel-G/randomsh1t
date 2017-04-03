var express = require('express');

var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/msg', function(req, res) {
	res.json({"message": "salut"});
});

app.listen(1337);

console.log('Server running on port 1337');