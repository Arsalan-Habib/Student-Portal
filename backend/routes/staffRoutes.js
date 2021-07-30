const express = require("express");
const {
	registerStaff,
	authenticateStaff,
} = require("../controllers/staffController");

const staffRouter = express.Router();

staffRouter.route("/").post(registerStaff);
staffRouter.route("/login").post(authenticateStaff);

module.exports = {
	staffRouter,
};
