function User(name, country){
	User.prototype.name;
	User.prototype.country;

	this.name = name;
	this.country = country;
};

User.prototype.getUserData = function() {
	return this.name + " from " + this.country; 
};


module.exports = User;


