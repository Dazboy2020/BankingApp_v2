const mongoose = require('mongoose');

const { schema } = mongoose;

const userSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
});

//! userSchema inside of the 'User' collection
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
