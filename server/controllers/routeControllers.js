const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const test = (req, res) => {
	res.json('test is working!');
};

//! Register User //
const registerUser = async (req, res, next) => {
	try {
		const { username, email, password, confirmPassword } = req.body;

		const exist = await User.findOne({ email });
		if (exist) {
			return res.json({
				error: 'Email already exists',
			});
		}

		if (!username || !email || !password || !confirmPassword) {
			return res.json({
				error: 'Please complete all fields',
			});
		}

		if (password !== confirmPassword) {
			return res.json({
				error: 'Passwords do not match!',
			});
		}

		if (password.length < 6) {
			return res.json({
				error: 'Password must be 6 characters long',
			});
		}

		const user = await User.create({
			username,
			email,
			password,
			confirmPassword,
			expenses: [],
			deposits: [],
		});

		// return res.json(user);
		sendToken(user, 201, res);
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.msg,
		});
	}
};

//! Login User //
const loginUser = async (req, res, next) => {
	const { email, password } = req.body;
	console.log(email, password);
	if (!email || !password) {
		return next(new ErrorResponse('Please provide an email and password', 400));
	}

	try {
		const user = await User.findOne({ email }).select('+password');

		if (!user) {
			return res.status(200).json({
				success: false,
				error: 'Invalid credentials',
			});
		}

		const isMatch = await user.matchPasswords(password);

		if (!isMatch) {
			// return next(new ErrorResponse('Invalid credentials', 401));
			return res.status(200).json({
				success: false,
				error: 'Invalid credentials',
			});
		}

		if (isMatch) {
			const token = user.getSignedToken();

			// Send both user data and token in the response
			res.status(200).json({
				// user,
				token,
				success: 'success',
			});
		}

		// sendToken(user, 200, res);
	} catch (error) {
		next(error);
		// return res.status(500).json({ error: 'Internal server error' });
	}
};

const getUser = async (req, res, next) => {
	const userId = req.id;
	console.log(userId);
	let user;

	try {
		user = await User.findById(userId, '-password');
	} catch (error) {
		console.log(error);
	}

	if (!user) return next(new ErrorResponse('Invalid credentials', 401));

	return res.status(200).json({ user });
};

//! Add Expense
const addExpense = async (req, res, next) => {
	const { amount, date, category, id, _id } = req.body;
	// const _id = req.query._id;
	try {
		const user = await User.findById(_id);

		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		const newExpense = {
			amount,
			date,
			category,
			id,
		};

		user.expenses.unshift(newExpense);

		await user.save();

		console.log(`Expense added successfully for user with ID ${_id}`);

		return res.status(200).json({ message: 'Expenses added successfully' });
	} catch (error) {
		console.error(`Error adding expenses: ${error.message}`);
		return res.status(500).json({ error: 'Internal server error' });
	}
};

//! Add Deposit //
const addDeposit = async (req, res, next) => {
	const { amount, date, category, id, _id } = req.body;
	// const _id = req.query._id;

	try {
		const user = await User.findById(_id);

		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		const newExpense = {
			amount,
			date,
			category,
			id,
		};

		user.deposits.unshift(newExpense);
		await user.save();

		console.log(`Deposit added successfully for user with ID ${_id}`);

		return res.status(200).json({ message: 'Expenses added successfully' });
	} catch (error) {
		console.error(`Error adding expenses: ${error.message}`);
		return res.status(500).json({ error: 'Internal server error' });
	}
};

//! Delete Deposit
const deleteDeposit = async (req, res, next) => {
	try {
		const { userId, depositId } = req.params;
		console.log('Received DELETE_Deposit request:', userId, depositId);

		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const depositIndex = user.deposits.findIndex(
			(deposit) => deposit.id === depositId
		);

		if (depositIndex === -1) {
			return res.status(404).json({ message: 'Deposit not found' });
		}

		// Remove the expense from the expenses array
		user.deposits.splice(depositIndex, 1);

		// Save the updated user document
		await user.save();

		res.status(200).json({ message: 'Deposit deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

//! Delete Expense
const deleteExpense = async (req, res, next) => {
	try {
		const { userId, expenseId } = req.params;
		console.log('Received DELETE-expense request:', userId, expenseId);

		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const expenseIndex = user.expenses.findIndex(
			(expense) => expense.id === expenseId
		);

		if (expenseIndex === -1) {
			return res.status(404).json({ message: 'Expense not found' });
		}

		// Remove the expense from the expenses array
		user.expenses.splice(expenseIndex, 1);

		await user.save();

		res.status(200).json({ message: 'Expense deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

//! Edit Expense
const editExpense = async (req, res, next) => {
	console.log('API HIT');
	try {
		const { userId, expenseId } = req.params;
		const updatedExpenseData = req.body;

		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		const expense = user.expenses.find((exp) => exp.id === expenseId);

		if (!expense) {
			console.log('Expenses:', user.expenses);
			return res.status(404).json({ error: 'Expense not found' });
		}

		// Update the expense properties
		expense.amount = updatedExpenseData.amount;
		expense.date = updatedExpenseData.date;
		expense.category = updatedExpenseData.category;

		const updatedUser = await user.save();

		res.json(updatedUser); // Respond with the updated user document
	} catch (error) {
		console.error('Error updating expense:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};

//! Edit Deposit //

const editDeposit = async (req, res, next) => {
	console.log('API HIT');
	try {
		const { userId, depositId } = req.params;
		const updatedDepositData = req.body;
		console.log(updatedDepositData);

		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		const deposit = user.deposits.find((exp) => exp.id === depositId);

		console.log(user, deposit);

		if (!deposit) {
			console.log('Deposits:', user.deposits);
			return res.status(404).json({ error: 'Deposit not found' });
		}

		// Update the expense properties
		deposit.amount = updatedDepositData.amount;
		deposit.date = updatedDepositData.date;
		deposit.category = updatedDepositData.category;

		// Save the updated user document
		const updatedUser = await user.save();

		res.json(updatedUser); // Respond with the updated user document
	} catch (error) {
		console.error('Error updating expense:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};

const forgotPassword = async (req, res, next) => {
	const { email } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user) {
			// return next(new ErrorResponse('Email could not be sent', 404));
			return res.status(200).json({
				success: false,
				error: 'Email address invalid',
			});
		}

		const resetToken = user.getResetPasswordToken();

		await user.save();

		const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

		const message = `
		<h1>You have requested a password reset</h1>
		<p>Please visit this link to reset your password<p>
		<a href=${resetUrl} clicktracking=off>${resetUrl}</a>
		`;

		try {
			await sendEmail({
				to: user.email,
				subject: 'Password Reset Request',
				text: message,
			});

			res.status(200).json({ success: true, data: 'Email sent' });
		} catch (error) {
			user.resetPasswordToken = undefined;
			user.resetPasswordExpire = undefined;

			await user.save();

			return next(new ErrorResponse('Email could not be sent', 500));
		}
	} catch (error) {
		next(error);
	}
};

const resetPassword = async (req, res, next) => {
	const resetPasswordToken = crypto
		.createHash('sha256')
		.update(req.params.resetToken)
		.digest('hex');

	try {
		const user = await User.findOne({
			resetPasswordToken,
			resetPasswordExpire: { $gt: Date.now() },
		});

		console.log(user);

		if (!user) {
			// return next(new ErrorResponse('Invalid reset token', 400));
			return res.status(200).json({
				success: false,
				error: 'Invalid Reset Token',
			});
		}

		user.password = req.body.password;
		user.confirmPassword = req.body.confirmPassword;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;

		await user.save();

		//*possible new code
		const token = user.getSignedToken();

		// Send both user data and token in the response
		res.status(200).json({
			// user,
			token,
			success: 'Password Reset!',
		});

		//* Old code below. No token sent
		// return res
		// 	.status(201)
		// 	.json({ success: true, data: 'Password Reset Success' });
	} catch (error) {
		next(error);
	}
};

const sendToken = (user, statusCode, res) => {
	const token = user.getSignedToken();
	res.status(statusCode).json({ success: true, token });
};

module.exports = {
	test,
	registerUser,
	loginUser,
	addExpense,
	addDeposit,
	deleteExpense,
	deleteDeposit,
	editExpense,
	editDeposit,
	forgotPassword,
	resetPassword,
	getUser,
};
