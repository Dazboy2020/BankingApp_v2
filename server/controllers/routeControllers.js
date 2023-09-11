const { comparePassword, hashPassword } = require('../helpers/auth');
const User = require('../models/user');

const test = (req, res) => {
	res.json('test is working!');
};

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

module.exports = {
	test,
	registerUser,
	loginUser,
	addExpense,
	addDeposit,
};
