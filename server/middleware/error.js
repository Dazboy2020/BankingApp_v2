const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
	let error = { ...err };

	error.message = err.message;

	console.log(error.name);

	if (error.name === 'TokenExpiredError') {
		const message = 'Session has expired';
		error = new ErrorResponse(message, 401);
	}

	console.log(`ERROR:  ${err}`.bgRed);

	return res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || 'Server Error',
	});
};

module.exports = errorHandler;
