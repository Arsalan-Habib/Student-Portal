export function gpaCalculator(marks) {
    let result = {
        grade: null,
        gpa: null,
    };

    switch (true) {
        case marks >= 90:
            result.gpa = 4.0;
            result.grade = "A+";
            break;

        case marks >= 85:
            result.gpa = 4.0;
            result.grade = "A";
            break;

        case marks >= 80:
            result.gpa = 3.8;
            result.grade = "A-";
            break;

        case marks >= 75:
            result.gpa = 3.4;
            result.grade = "B+";
            break;

        case marks >= 71:
            result.gpa = 3.0;
            result.grade = "A";
            break;

        case marks >= 68:
            result.gpa = 2.8;
            result.grade = "B-";
            break;

        case marks >= 64:
            result.gpa = 2.4;
            result.grade = "C+";
            break;

        case marks >= 61:
            result.gpa = 2.0;
            result.grade = "C";
            break;

        case marks >= 57:
            result.gpa = 1.8;
            result.grade = "C-";
            break;

        case marks >= 53:
            result.gpa = 1.4;
            result.grade = "D+";
            break;

        case marks >= 50:
            result.gpa = 1.0;
            result.grade = "D";
            break;

        default:
            result.gpa = 0.0;
            result.grade = "F";
    }
    return result;
}
