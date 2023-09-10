const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		unique: true,
	},
	password: String,
	confirmPassword: String,
	expenses: [
		{
			id: String,
			amount: Number,
			date: String,
			category: String,
		},
	],
	deposits: [
		{
			id: String,
			amount: Number,
			date: String,
			category: String,
		},
	],
});

//! userSchema inside of the 'User' collection
const UserModel = mongoose.model('User', userSchema);

// module.exports = mongoose.model('Recipe', RecipeSchema);

module.exports = UserModel;
