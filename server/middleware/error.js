const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
	let error = { ...err };

	error.message = err.message;

	console.log(error.message);

	if (error.name === 'TokenExpiredError') {
		const message = 'Session has expired';
		error = new ErrorResponse(message, 401);
	}

	if (
		error.message ===
		'User validation failed: email: Please provide an email address'
	) {
		const message = 'Please provide a valid email address';
		error = new ErrorResponse(message, 401);
	}

	if (
		error.message ===
		'User validation failed: username: Please provide a username'
	) {
		const message = 'Please provide a username';
		error = new ErrorResponse(message, 401);
	}

	if (
		error.message ===
			'User validation failed: expenses.0.amount: Amount must have at most two decimal places' ||
		'User validation failed: deposits.0.amount: Amount must have at most two decimal places'
	) {
		const message = 'Amount must have at most two decimal places';
		error = new ErrorResponse(message, 401);
	}

	console.log(`ERROR:  ${err}`.bgRed);

	return res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || 'Server Error',
	});
};

module.exports = errorHandler;
