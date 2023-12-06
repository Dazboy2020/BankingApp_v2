exports.googleAuth = async (req, res, next) => {
	const code = req.query.code; // Retrieve 'code' from query parameters
	console.log(code);
	return res.status(200).json({
		success: true,
		data: code,
	});
};
