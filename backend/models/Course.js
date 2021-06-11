const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    courseNumber: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    theoryProfessor: {
        type: String,
        required: true,
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
        required: true,
    },
});

courseSchema.index(
    {
        semester: 1,
    },
    { unique: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = {
    courseSchema,
    Course,
};
