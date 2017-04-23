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
.post((req, res) => {
		//res.json(req, res);
		console.log('POST /messages ', req.body);

		sqlConnection
		.query(`INSERT INTO messages (content) VALUES ('${req.body.content}');`, (error, results, fields) => {
			if (error) throw error;
			res.json({ id: results.insertId, content: req.body.content });
		})
	})

.get((req, res) => {
	sqlConnection
	.query('SELECT * FROM messages ORDER by id ASC', (error, results, fields) => {
		if (error) throw error;
		console.log('GET /messages');
		res.json(results);
	})
})


router.route('/messages/:message_id')
.put((req, res) => {
	console.log('PUT /messages ', req.params.message_id);
	sqlConnection
	.query(`UPDATE messages SET content=' ${req.body.content} 'WHERE id = ' ${req.params.message_id} '`, 
		(error, results, fields) => {
		if (error) throw error;
		res.json({message: 'Message updated!'})
	})
})

router.route('/messages/:message_id')
.delete((req, res) => {
	console.log(`DELETE /messages ${req.params.message_id}`);
	sqlConnection
	.query(`DELETE FROM messages WHERE id = ' ${req.params.message_id} '`, 
		(error, results, fields) => {
		if (error) throw error;
		res.json({message: 'Message deleted!'})
	})
})


//connection.end();
app.listen(port);
console.log(`Server running on port ${port}`);