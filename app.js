const express = require('express');
const app = express();
const userController = require('./controllers/userController');


var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.get('/', (req, res) => userController(req, res));

app.listen(port, () => {
	console.log('app is listening to port 3000.');
});