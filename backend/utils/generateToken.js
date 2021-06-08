const jwt = require("jsonwebtoken");

const generateToken = (seatNumber) => {
    return jwt.sign({ seatNumber }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = {
    generateToken,
};
