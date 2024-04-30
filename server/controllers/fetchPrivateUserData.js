const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/user');

exports.getUserProtectedRoute = asyncHandler(async (req, res, next) => {
	console.log('backend: getUserToken', req.user);
	const userId = req.user._id;

	let user;

	user = await User.findById(userId, '-password');
	if (!user) {
		return next(new ErrorResponse(`User not found`, 400));
	}

	res.status(200).json({
		user,
		success: 'success protected middleware user route',
	});
});
