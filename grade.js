// Write the function result
// result *grade* should return the corresponding grade
// grade is a number between 0 and 100
// if grade is not between 0 and 100, the function should return "Invalid grade"
function result(grade) {
        if (grade >= 0 && grade <= 39) {
            return "E";
        } else if (grade >= 40 && grade <= 49) {
            return "D";
        } else if (grade >= 50 && grade <= 59) {
            return "C";
        } else if (grade >= 60 && grade <= 79) {
            return "B";
        } else if (grade >= 80 && grade <= 100) {
            return "A";
        } else {
            return "Invalid grade";
        }
    }
    
    console.log(result(-440));
    
