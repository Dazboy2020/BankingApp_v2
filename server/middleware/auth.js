const jwt = require('jsonwebtoken');
const User = require('../models/user');
const errorResponse = require('../utils/errorResponse');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) {
		return next(new ErrorResponse('Not authorized to access this route', 401));
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findById(decoded.id).select('_id');

		if (!user) {
			return next(new ErrorResponse('No user found with this ID', 404));
		}

		req.user = user;
		console.log('success: private route');

		next();
	} catch (error) {
		return next(new errorResponse('Not authorized to access this route', 401));
	}
};
