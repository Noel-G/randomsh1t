const express		= require('express');
const app			= express();
const mysql			= require('mysql');
const bodyParser 	= require('body-parser');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 1337;
const router = express.Router();

const sqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'guillaume',
  database : 'charts'
});

sqlConnection.connect();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});


// all routes will be prefixed with /api
app.use('/api', router);

router.route('/messages')
	.post(function(req, res) {
		//res.json(req, res);
		console.log('POST /messages ', req.body);

		sqlConnection
			.query(`INSERT INTO messages (content) VALUES ('`+req.body.content+`');`, function(error, results, fields) {
  				if (error) throw error;
				res.json({ message: 'POST /messages SUCCESS' });
			})

	})

	.get(function(req, res) {
		sqlConnection
			.query('SELECT * FROM messages', function (error, results, fields) {
  				if (error) throw error;
  				console.log('GET /messages');
				res.json(results);
		})
	});


//connection.end();
app.listen(port);
console.log('Server running on port ' + port);