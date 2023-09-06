const User = require('../models/user');

const test = (req, res) => {
	res.json('test is working!');
};

const registerUser = async (req, res) => {
	try {
		const { firstName, lastName, email, password, confirmPassword } = req.body;
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

		if (!password || password.length < 6) {
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

		const user = await User.create({
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
		});

		return res.json(user);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	test,
	registerUser,
};
