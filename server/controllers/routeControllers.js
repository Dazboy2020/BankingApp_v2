const { comparePassword, hashPassword } = require('../helpers/auth');
const User = require('../models/user');

const test = (req, res) => {
	res.json('test is working!');
};

//! Register User //
const registerUser = async (req, res) => {
	try {
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			expenses,
			deposits,
		} = req.body;
		console.log(req.body);

		if (!firstName) {
			return res.json({
				error: 'Name is required!',
			});
		}

		if (!lastName) {
			return res.json({
				error: 'Last Name is required!',
			});
		}

		if (!password || password.length < 4) {
			return res.json({
				error: 'Password is required and should be at least 6 characters long!',
			});
		}

		if (password !== confirmPassword) {
			return res.json({
				error: 'Passwords do not match!',
			});
		}

		const exist = await User.findOne({ email });
		if (exist) {
			return res.json({
				error: 'Email already exists',
			});
		}
		const hashedPassword = await hashPassword(password, confirmPassword);

		const user = await User.create({
			firstName,
			lastName,
			email,
			expenses: [],
			deposits: [],
			password: hashedPassword,
			confirmPassword: hashedPassword,
		});

		return res.json(user);
	} catch (error) {
		console.log(error);
	}
};

//! Login User //
const loginUser = async (req, res) => {
	try {
		const { firstName, password } = req.body;
		const user = await User.findOne({ firstName });
		if (!user) {
			return res.json({
				error: 'No user found!',
			});
		}

		const match = await comparePassword(password, user.password);

		if (match) {
			// Send the user object as JSON
			res.status(200).json({ user });
		}

		if (!match) {
			res.json({ error: 'Incorrect Password' });
		}
	} catch (error) {
		// Handle errors here
		res.status(500).json({ error: 'Internal server error' });
	}
};

//! Add Expense
const addExpense = async (req, res) => {
	const { amount, date, category, id } = req.body;
	const _id = req.query._id;
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
const addDeposit = async (req, res) => {
	const { amount, date, category, id } = req.body;
	const _id = req.query._id;

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
const deleteDeposit = async (req, res) => {
	try {
		const { userId, depositId } = req.params;
		console.log('Received DELETE_Deposit request:', userId, depositId);

		// Find the user by userId
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		// Find the expense in the user's expenses array by depositId
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
const deleteExpense = async (req, res) => {
	try {
		const { userId, expenseId } = req.params;
		console.log('Received DELETE-expense request:', userId, expenseId);

		// Find the user by userId
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		// Find the expense in the user's expenses array by expenseId
		const expenseIndex = user.expenses.findIndex(
			(expense) => expense.id === expenseId
		);

		if (expenseIndex === -1) {
			return res.status(404).json({ message: 'Expense not found' });
		}

		// Remove the expense from the expenses array
		user.expenses.splice(expenseIndex, 1);

		// Save the updated user document
		await user.save();

		res.status(200).json({ message: 'Expense deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

//! Edit Expense
const editExpense = async (req, res) => {
	console.log('API HIT');
	try {
		const { userId, expenseId } = req.params;
		const updatedExpenseData = req.body;

		// Find the user by _id
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		// Find the expense by _id within the expenses array
		const expense = user.expenses.find((exp) => exp.id === expenseId);

		if (!expense) {
			console.log('Expenses:', user.expenses);
			return res.status(404).json({ error: 'Expense not found' });
		}

		// Update the expense properties
		expense.amount = updatedExpenseData.amount;
		expense.date = updatedExpenseData.date;
		expense.category = updatedExpenseData.category;

		// Save the updated user document
		const updatedUser = await user.save();

		res.json(updatedUser); // Respond with the updated user document
	} catch (error) {
		console.error('Error updating expense:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
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
};
