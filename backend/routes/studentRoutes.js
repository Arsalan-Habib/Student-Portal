const express = require("express");
const {
    registerStudent,
    authenticateStudent,
    getStudentCourses,
} = require("../controllers/studentController");
const { protect } = require("../middleware/authMiddleware");

//* Base URL -> api/student
const studentRouter = express.Router();

studentRouter.route("/").post(registerStudent);
studentRouter.route("/login").post(authenticateStudent);
studentRouter.route("/courses/:seatNumber").get(protect, getStudentCourses);

module.exports = {
    studentRouter,
};
