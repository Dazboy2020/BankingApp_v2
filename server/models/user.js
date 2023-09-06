const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
	firstName: String,
	email: {
		type: String,
		unique: true,
	},
	password: String,
});

//! userSchema inside of the 'User' collection
const UserModel = mongoose.model('User', userSchema);

// module.exports = mongoose.model('Recipe', RecipeSchema);

module.exports = UserModel;
