let score = parseInt(prompt("Enter the student's score")); // Prompts the user to input the student's score

function calculateGrade(score) {
  // Using the if-else statements to evaluate the score
  if (score < 0 || score > 100) {
    return "Invalid, enter a number between 0 and 100";
  } else {
    let grade; // Declare the grade variable

    switch (true) {
      case score < 40:
        grade = "Your grade is: E";
        break;
      case score < 50:
        grade = "Your grade is: D";
        break;
      case score < 60:
        grade = "Your grade is: C";
        break;
      case score < 80:
        grade = "Your grade is: B";
        break;
      case score <= 100:
        grade = "Your grade is: A";
        break;
      default:
        grade = "Invalid score";
        break;
    }

    return grade; // Return the grade variable
  }
}

let gradeScored = calculateGrade(score);
window.alert(gradeScored); // Prints the student's grades
