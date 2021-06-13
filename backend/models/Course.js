const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    courseNumber: {
        type: String,
    },
    title: {
        type: String,
    },
    theoryProfessor: {
        type: String,
    },
    labProfessor: {
        type: String,
    },
    theoryMarks: {
        type: Number,
    },
    labMarks: {
        type: Number,
    },
    examDate: {
        type: String,
    },
    semester: {
        type: Number,
    },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = {
    courseSchema,
    Course,
};
