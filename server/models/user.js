const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

// Custom validator function to check for the number of decimal places
const validateDecimalPlaces = function (value) {
	// Convert the number to a string
	const valueString = value.toString();

	// Use regular expression to match the decimal part
	const decimalMatch = valueString.match(/\.\d{3,}/);

	// If there's a match, it means the number has more than two decimal places
	return decimalMatch === null;
};

const userSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Please provide a username'],
		unique: false,
	},
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
		// required: [true, 'Please add a password'],
		minLength: 8,
		//! select false
		select: false,
	},
	confirmPassword: {
		type: String,
		// required: [true, 'Please confirm your password'],
		minLength: 8,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
	expenses: [
		{
			id: String,
			amount: {
				type: Number,
				validate: [
					validateDecimalPlaces,
					'Amount must have at most two decimal places',
				],
			},
			date: String,
			category: String,
		},
	],
	deposits: [
		{
			id: String,
			amount: {
				type: Number,
				validate: [
					validateDecimalPlaces,
					'Amount must have at most two decimal places',
				],
			},
			date: String,
			category: String,
		},
	],
	budget: {
		amount: {
			type: Number,
			default: null,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
});

userSchema.pre('save', async function (next) {
	if (!this.isModified('password') || !this.password) {
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

userSchema.methods.getSignedToken = function () {
	return jwt.sign(
		{
			id: this._id,
		},
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRE }
	);
};

userSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(20).toString('hex');

	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	this.resetPasswordExpire = Date.now() + 60 * (60 * 1000); // <-- 60 mins

	return resetToken;
};

//! userSchema inside of the 'User' collection
const User = mongoose.model('User', userSchema);

module.exports = User;
