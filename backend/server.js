const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const { studentRouter } = require("./routes/studentRoutes");
const { staffRouter } = require("./routes/staffRoutes");

// linking to the .env file
dotenv.config();

// establishing connection to the database.
connectDB();

// initializing the express app
const app = express();

// enabling cors from all origins
app.use(cors());

// logging all server actions for development
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// using the built in json parser for parsing requests.
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// using the student Router
app.use("/api/student", studentRouter);

// using the staff Router
app.use("/api/staff", staffRouter);

app.get("/", (req, res) => {
	res.send(
		"Welcome to the student portal api. All the api routes are available as /api"
	);
});

// handling not founds
app.use(notFound);

// handling errors and formatting them
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} on port: ${PORT}`)
);
