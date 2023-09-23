const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: [true, 'Please provide a username'],
	},
	lastName: String,
	email: {
		type: String,
		required: [true, 'Please provide an email address'],
		unique: true,
		match: [
			/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
			'Please provide a valid email address',
		],
	},
	password: {
		type: String,
		required: [true, 'Please add a password'],
		minLength: 6,
		//! select false
		// select: false,
	},
	confirmPassword: {
		type: String,
		required: [true, 'Please confirm your password'],
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
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

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	[this.password, this.confirmPassword] = await Promise.all([
		bcrypt.hash(this.password, salt),
		bcrypt.hash(this.confirmPassword, salt),
	]);
	next();
});

userSchema.methods.matchPasswords = async function (password) {
	return await bcrypt.compare(password, this.password);
};

//! userSchema inside of the 'User' collection
const User = mongoose.model('User', userSchema);

module.exports = User;
