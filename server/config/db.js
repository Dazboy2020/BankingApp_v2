const mongoose = require('mongoose');

const connectDB = async () => {
	await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		// useCreateIndex: true,
		useUnifiedTopology: true,
		// useFindandModify: true,
	});

	console.log('MongoDB Connected');
};

module.exports = connectDB;
