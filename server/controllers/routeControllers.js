const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");
const test = (req, res) => {
	res.json("test is working!");
};

//! Register User //
const registerUser = async (req, res, next) => {
	try {
		const { firstName, lastName, email, password, confirmPassword } = req.body;

		const exist = await User.findOne({ email });
		if (exist) {
			return res.json({
				error: "Email already exists",
			});
		}

		const user = await User.create({
			firstName,
			lastName,
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
	if (!email || !password) {
		return next(new ErrorResponse("Please provide an email and password", 400));
	}

	try {
		const user = await User.findOne({ email }).select("+password");

		if (!user) {
			res.status(404).json({
				success: false,
				error: "Invalid credentials",
			});
		}

		const isMatch = await user.matchPasswords(password);

		if (!isMatch) {
			return next(new ErrorResponse("Invalid credentials", 401));
		}

		if (!isMatch) {
			res.json({ error: "Incorrect Password" });
		}

		sendToken(user, 201, res);
	} catch (error) {
		next(err);
	}
};

//! Add Expense
const addExpense = async (req, res, next) => {
	const { amount, date, category, id } = req.body;
	const _id = req.query._id;
	try {
		const user = await User.findById(_id);

		if (!user) {
			return res.status(404).json({ error: "User not found" });
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

		return res.status(200).json({ message: "Expenses added successfully" });
	} catch (error) {
		console.error(`Error adding expenses: ${error.message}`);
		return res.status(500).json({ error: "Internal server error" });
	}
};

//! Add Deposit //
const addDeposit = async (req, res, next) => {
	const { amount, date, category, id } = req.body;
	const _id = req.query._id;

	try {
		const user = await User.findById(_id);

		if (!user) {
			return res.status(404).json({ error: "User not found" });
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

		return res.status(200).json({ message: "Expenses added successfully" });
	} catch (error) {
		console.error(`Error adding expenses: ${error.message}`);
		return res.status(500).json({ error: "Internal server error" });
	}
};

//! Delete Deposit
const deleteDeposit = async (req, res, next) => {
	try {
		const { userId, depositId } = req.params;
		console.log("Received DELETE_Deposit request:", userId, depositId);

		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const depositIndex = user.deposits.findIndex(
			(deposit) => deposit.id === depositId
		);

		if (depositIndex === -1) {
			return res.status(404).json({ message: "Deposit not found" });
		}

		// Remove the expense from the expenses array
		user.deposits.splice(depositIndex, 1);

		// Save the updated user document
		await user.save();

		res.status(200).json({ message: "Deposit deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

//! Delete Expense
const deleteExpense = async (req, res, next) => {
	try {
		const { userId, expenseId } = req.params;
		console.log("Received DELETE-expense request:", userId, expenseId);

		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const expenseIndex = user.expenses.findIndex(
			(expense) => expense.id === expenseId
		);

		if (expenseIndex === -1) {
			return res.status(404).json({ message: "Expense not found" });
		}

		// Remove the expense from the expenses array
		user.expenses.splice(expenseIndex, 1);

		await user.save();

		res.status(200).json({ message: "Expense deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

//! Edit Expense
const editExpense = async (req, res, next) => {
	console.log("API HIT");
	try {
		const { userId, expenseId } = req.params;
		const updatedExpenseData = req.body;

		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const expense = user.expenses.find((exp) => exp.id === expenseId);

		if (!expense) {
			console.log("Expenses:", user.expenses);
			return res.status(404).json({ error: "Expense not found" });
		}

		// Update the expense properties
		expense.amount = updatedExpenseData.amount;
		expense.date = updatedExpenseData.date;
		expense.category = updatedExpenseData.category;

		const updatedUser = await user.save();

		res.json(updatedUser); // Respond with the updated user document
	} catch (error) {
		console.error("Error updating expense:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

//! Edit Deposit //

const editDeposit = async (req, res, next) => {
	console.log("API HIT");
	try {
		const { userId, depositId } = req.params;
		const updatedDepositData = req.body;
		console.log(updatedDepositData);

		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const deposit = user.deposits.find((exp) => exp.id === depositId);

		console.log(user, deposit);

		if (!deposit) {
			console.log("Deposits:", user.deposits);
			return res.status(404).json({ error: "Deposit not found" });
		}

		// Update the expense properties
		deposit.amount = updatedDepositData.amount;
		deposit.date = updatedDepositData.date;
		deposit.category = updatedDepositData.category;

		// Save the updated user document
		const updatedUser = await user.save();

		res.json(updatedUser); // Respond with the updated user document
	} catch (error) {
		console.error("Error updating expense:", error);
		res.status(500).json({ error: "Internal server error" });
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
};
