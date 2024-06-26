const jwt = require('jsonwebtoken');
const User = require('../models/user');
const errorResponse = require('../utils/errorResponse');
const ErrorResponse = require('../utils/errorResponse');
const colors = require('colors');

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

		if (!decoded) {
			return next(
				new ErrorResponse('Not authorized to access this route', 401)
			);
		}

		const user = await User.findById(decoded.id).select('_id');

		if (!user) {
			return next(new ErrorResponse('No user found with this ID', 404));
		}

		req.user = user;
		console.log(
			'MIDDLEWARE: private route authentication successful'.bgCyan.bold
		);
		next();
	} catch (error) {
		return next(new ErrorResponse('Not authorized to access this route', 401));
	}
};
