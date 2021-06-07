const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    seatNumber: {
        type: String,
        required: true,
        unique: true,
    },
    faculty: {
        type: String,
        default: "CS",
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    shift: {
        type: String,
        default: "morning",
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    courses: [],
});

studentSchema.index(
    {
        seatNumber: 1,
        phoneNumber: 1,
    },
    { unique: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = {
    Student,
};
