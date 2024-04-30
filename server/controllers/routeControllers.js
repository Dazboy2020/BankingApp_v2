const User = require('../models/user');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const test = (req, res) => {
	res.json('test is working!');
};

//! Register User //
const registerUser = asyncHandler(async (req, res, next) => {
	const { username, email, password, confirmPassword } = req.body;

	if (!username || !email || !password || !confirmPassword) {
		return next(new ErrorResponse(`Please provide all fields`, 400));
	}

	const existingUser = await User.findOne({ $or: [{ username }, { email }] });

	if (existingUser) {
		// Check if the username or email already exists
		if (existingUser.username === username) {
			return next(new ErrorResponse(`User already exists`, 400));
		}
		if (existingUser.email === email) {
			return next(new ErrorResponse(`Email already exists`, 400));
		}
	}

	if (password !== confirmPassword) {
		return next(new ErrorResponse(`Passwords do not match`, 400));
	}

	if (password.length < 8) {
		return next(
			new ErrorResponse(`Password must be at least 8 characters`, 400)
		);
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
});

//! Login User //
const loginUser = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new ErrorResponse(`Please provide an email and password`, 400));
	}

	const user = await User.findOne({ email }).select('+password');

	if (!user) {
		return next(new ErrorResponse(`User not found`, 400));
	}

	const isMatch = await user.matchPasswords(password);

	if (!isMatch) {
		return next(new ErrorResponse('Invalid credentials', 401));
	}

	if (isMatch) {
		const token = user.getSignedToken();

		// Send both user data and token in the response
		res.status(200).json({
			// user,
			token,
			success: 'success: token sent',
		});
	}

	// sendToken(user, 200, res);
});

//! Add Expense
const addExpense = asyncHandler(async (req, res, next) => {
	const { amount, date, category, id, _id } = req.body;
	const user = await User.findById(_id);

	if (!user) {
		return next(new ErrorResponse(`Expense not found with id of ${_id}`, 404));
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

	res.status(200).json({ message: 'Expense added successfully' });
});

//! Add Deposit //
const addDeposit = asyncHandler(async (req, res, next) => {
	const { amount, date, category, id, _id } = req.body;

	const user = await User.findById(_id);

	if (!user) {
		return next(new ErrorResponse(`User not found with id of ${_id}`, 404));
	}

	const newExpense = {
		amount,
		date,
		category,
		id,
	};

	user.deposits.unshift(newExpense);
	await user.save();

	res.status(200).json({ message: 'Deposit added successfully' });
});

//! Delete Deposit
const deleteDeposit = asyncHandler(async (req, res, next) => {
	const { userId, depositId } = req.params;
	console.log('Received DELETE_Deposit request:', userId, depositId);

	const user = await User.findById(userId);

	if (!user) {
		return next(new ErrorResponse(`User not found with id of ${_id}`, 404));
	}

	const depositIndex = user.deposits.findIndex(
		(deposit) => deposit.id === depositId
	);

	if (depositIndex === -1) {
		return next(
			new ErrorResponse(`Deposit not found with id of ${depositId}`, 404)
		);
	}

	// Remove the expense from the expenses array
	user.deposits.splice(depositIndex, 1);

	// Save the updated user document
	await user.save();

	res.status(200).json({ message: 'Deposit deleted successfully' });
});

//! Delete Expense
const deleteExpense = asyncHandler(async (req, res, next) => {
	const { userId, expenseId } = req.params;
	console.log('Received DELETE-expense request:', userId, expenseId);

	const user = await User.findById(userId);

	if (!user) {
		return next(new ErrorResponse(`User not found with id of ${userId}`, 404));
	}

	const expenseIndex = user.expenses.findIndex(
		(expense) => expense.id === expenseId
	);

	if (expenseIndex === -1) {
		return next(
			new ErrorResponse(`Expense not found with id of ${expenseId}`, 404)
		);
	}

	// Remove the expense from the expenses array
	user.expenses.splice(expenseIndex, 1);

	await user.save();

	res.status(200).json({ message: 'Expense deleted successfully' });
});

//! Edit Expense
const editExpense = asyncHandler(async (req, res, next) => {
	const { userId, expenseId } = req.params;
	const updatedExpenseData = req.body;

	const user = await User.findById(userId);

	if (!user) {
		return next(new ErrorResponse(`User not found with id of ${_id}`, 404));
	}

	const expense = user.expenses.find((exp) => exp.id === expenseId);

	if (!expense) {
		console.log('Expenses:', user.expenses);
		return next(
			new ErrorResponse(`Expense not found with id of ${expenseId}`, 404)
		);
	}

	// Update the expense properties
	expense.amount = updatedExpenseData.amount;
	expense.date = updatedExpenseData.date;
	expense.category = updatedExpenseData.category;

	const updatedUser = await user.save();

	res.json(updatedUser); // Respond with the updated user document
});

//! Edit Deposit //

const editDeposit = asyncHandler(async (err, req, res, next) => {
	console.log('API HIT');
	const { userId, depositId } = req.params;
	const updatedDepositData = req.body;
	console.log(updatedDepositData);

	const user = await User.findById(userId);

	if (!user) {
		return next(new ErrorResponse(`User not found with id of ${userId}`, 401));
	}

	const deposit = user.deposits.find((exp) => exp.id === depositId);

	console.log(user, deposit);

	if (!deposit) {
		return next(
			new ErrorResponse(`User not found with id of ${depositId}`, 404)
		);
	}

	// Update the expense properties
	deposit.amount = updatedDepositData.amount;
	deposit.date = updatedDepositData.date;
	deposit.category = updatedDepositData.category;

	// Save the updated user document
	const updatedUser = await user.save();

	res.json(updatedUser);
	// Respond with the updated user document
});

//! Edit Budget //
const editBudget = asyncHandler(async (req, res) => {
	const { userId } = req.params;
	const { budgetAmount, budgetDate } = req.body;

	const user = await User.findByIdAndUpdate(
		userId,
		{ 'budget.amount': budgetAmount, 'budget.date': budgetDate },
		{ new: true }
	);

	res.status(200).json(user);
});

//! Forgot password and send email link
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

//! Reset password
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
	editBudget,
	forgotPassword,
	resetPassword,
	sendToken,
};
