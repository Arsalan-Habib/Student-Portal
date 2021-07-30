const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	staffId: {
		type: String,
		required: true,
		unique: true,
	},
	phoneNumber: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
});

staffSchema.index(
	{
		staffId: 1,
		phoneNumber: 1,
	},
	{ unique: true }
);

const Staff = mongoose.model("Staff", staffSchema);

module.exports = {
	Staff,
};
