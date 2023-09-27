const User = require('../models/user');

exports.getPrivateData = async (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'You got access to this private route 1',
	});
};

exports.getPrivateData2 = (req, res, next) => {
	res.status(200).json({
		success: true,
		data: 'You got access to this private route 2',
	});
};

exports.getUserData = async (req, res, next) => {
	console.log(req.user);
	const userId = req.user._id;

	let user;

	try {
		user = await User.findById(userId, '-password');
		if (!user) {
			return res.status(200).json({
				success: false,
				error: 'Invalid credentials',
			});
		}

		return res.status(200).json({
			user,
			success: 'success',
		});
	} catch (error) {
		console.log(error);
	}

	// const user = req.user;
	// return res.status(200).json({
	// 	user,
	// 	success: 'success',
	// });
};
