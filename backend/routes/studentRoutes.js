const express = require("express");
const { registerStudent } = require("../controllers/studentController");

const studentRouter = express.Router();

studentRouter.route("/").post(registerStudent);

module.exports = {
    studentRouter,
};
