const express = require('express');
const app = express();
const userController = require('./controllers/userController');




app.set('view engine', 'ejs');

app.get('/', (req, res) => userController(req, res));

app.listen(3000, () => {
	console.log('app is listening to port 3000.');
});