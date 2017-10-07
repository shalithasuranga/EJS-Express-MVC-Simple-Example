const User = require('../models/User');

module.exports = (req, res) => {

	let data = [
		new User('Shalitha Suranga', 'Sri Lanka'),
		new User('John Max', 'Finland'),
		new User('Shauny Amily', 'Germany'),
	];


	res.render('userview', {
		data : data,
	});
};