const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const path = require("path");

const app = express();

//!DB connection
connectDB();

app.use(express.static(path.join(__dirname, "public")));

//! Middleware
app.use(express.json());

app.use(
	cors({
		credentials: true,
		origin: [
			"http://localhost:3000",
			"https://expensify-frontend.onrender.com",
		],
	})
);

app.use("/", require("./routes/authRoutes"));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
	console.log(`Serving is Stringrunning on ${PORT}`)
);

process.on("unhandledRejection", () => (error, promise) => {
	console.log(`Logged Error: ${error}`);
	server.close(() => process.exit(1));
});
