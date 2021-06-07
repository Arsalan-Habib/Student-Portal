const { Student } = require("../models/Student");

// desc: Register new Student
// route: /api/student
// Method: POST

const registerStudent = async (req, res) => {
    const {
        fullName,
        seatNumber,
        faculty,
        phoneNumber,
        email,
        shift,
        password,
    } = req.body;

    const student = new Student({
        fullName,
        seatNumber,
        faculty,
        phoneNumber,
        email,
        shift,
        password,
    });

    try {
        let createdStudent = await student.save();
        createdStudent = await Student.findById(createdStudent._id).select({
            __v: 0,
            password: 0,
        });
        res.status(201).json(createdStudent);
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    registerStudent,
};
