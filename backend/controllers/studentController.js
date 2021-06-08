const { Student } = require("../models/Student");
const { generateToken } = require("../utils/generateToken");

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

// desc: Authenticate Student
// route: /api/student/login
// Method: POST
const authenticateStudent = async (req, res) => {
    const { seatNumber, password } = req.body;

    try {
        const student = await Student.findOne({ seatNumber: seatNumber });
        if (student) {
            if (student.password === password) {
                res.status(200);
                res.json({
                    student: {
                        fullName: student.fullName,
                        seatNumber: student.seatNumber,
                        phoneNumber: student.phoneNumber,
                        email: student.email,
                        faculty: student.faculty,
                        shift: student.shift,
                    },
                    accessToken: generateToken(seatNumber),
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

// desc: Get Student's courses
// route: /api/student/courses/:seatNumber
// Method: GET

const getStudentCourses = async (req, res) => {
    const seatNumber = req.params.seatNumber;

    try {
        const student = await Student.findOne({ seatNumber });
        if (student) {
            res.status(200).json({ courses: student.courses });
        } else {
            res.status(404).json({
                error: "No student found for given seatNumber",
            });
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    registerStudent,
    authenticateStudent,
    getStudentCourses,
};
