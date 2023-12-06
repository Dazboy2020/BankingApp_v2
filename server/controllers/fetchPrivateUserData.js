const User = require('../models/user');

exports.getUserProtectedRoute = async (req, res, next) => {
	console.log('backend: getUserToken', req.user);
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
			success: 'success protected middleware user route',
		});
	} catch (error) {
		console.log(error);
	}
};
