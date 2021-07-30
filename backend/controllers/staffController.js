const { uploadToCloudinary } = require("../config/cloudinaryConfig");
const { Staff } = require("../models/Staff");
const { generateToken } = require("../utils/generateToken");

// desc: Register new Staff Account
// route: /api/staff
// Method: POST
const registerStaff = async (req, res) => {
	const { fullName, staffId, phoneNumber, email, password, image } = req.body;

	// checking if a required field is empty.
	if (!fullName || !staffId || !email) {
		res.status(400).json({
			error: "fullName,staffId and email are all required fields.",
		});
	}

	// checking if account already exists for staffId or email.
	let checkStaff = await Staff.findOne({
		$or: [{ staffId: staffId }, { email: email }],
	});

	if (checkStaff) {
		res.status(400).json({
			error: "Account already exists for given staffId or email.",
		});
	} else {
		const staff = new Staff({
			fullName,
			staffId,
			phoneNumber,
			email,
			password,
			image: image && (await uploadToCloudinary(image, staffId)),
		});

		try {
			let createdAccount = await staff.save();
			createdAccount = await Staff.findById(createdAccount._id).select({
				__v: 0,
				password: 0,
			});
			res.status(201).json(createdAccount);
		} catch (error) {
			throw new Error(error.message);
		}
	}
};

// desc: Authenticate Staff
// route: /api/staff/login
// Method: POST

const authenticateStaff = async (req, res) => {
	const { staffId, password } = req.body;
	try {
		const staff = await Staff.findOne({ staffId: staffId });
		if (staff) {
			// needs improvement, jwt and cleaning of sensitive info before sending response
			if (staff.password === password) {
				res.status(200);
				res.json({
					staff: staff,
					accessToken: generateToken(staffId),
				});
			} else {
				res.status(401);
				res.json({ error: "Login failed. Invalid password." });
			}
		} else {
			res.status(404);
			res.json({ error: "User not found." });
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = { registerStaff, authenticateStaff };
