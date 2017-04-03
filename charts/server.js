var express = require('express');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'guillaume',
  database : 'charts'
});

app.use(express.static(__dirname + '/client'));

connection.connect();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/msg', function(req, res) {
	connection.
	query('SELECT * FROM messages', function (error, results, fields) {
  		if (error) throw error;
  		console.log('The solution is: ', results);
		res.json(results);
	});

});


//connection.end();

app.listen(1337);

console.log('Server running on port 1337');