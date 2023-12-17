let score = prompt("Enter the student's score"); //Prompts the user to input student's score

function calculateGrade(score) {
  // Using the if else statements to evaluate the score
  if (score >= 0 && score <= 39) {
    return `Your grade is:${"E"}`;
  } else if (score >= 40 && score < 49) {
    return `Your grade is:${"D"}`;
  } else if (score >= 49 && score < 59) {
    return `Your grade is:${"C"}`;
  } else if (score >= 60 && score < 79) {
    return `Your grade is:${"B"}`;
  } else if (score >= 79 && score <= 100) {
    return `Your grade is:${"A"}`;
  } else {
    return "Please enter a number between 0 and 100 ";
  }
}

let grade = calculateGrade(score);
window.alert(grade); //Prints the student's the grade
