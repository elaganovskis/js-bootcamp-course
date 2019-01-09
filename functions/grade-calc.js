// students score
// total possible score

// 15/20 -> You got a C {75%} !
// A 90-100 B 80-89 C 70-79 D 60-69 F 0-59



const studentGrade = function (studentScore, totalPossibleScore = 20) {
    const studentEndScore = studentScore / totalPossibleScore;
    const studentPercentageResult = studentEndScore * 100 + "%";
    if (studentEndScore >= 0.9) {
      return `You got a A - ${studentPercentageResult}!`;
    } else if (studentEndScore >= 0.8) {
      return `You got a B - ${studentPercentageResult}!`;
    } else if (studentEndScore >= 0.7) {
      return `You got a C - ${studentPercentageResult}!`;
    } else if (studentEndScore >= 0.6) {
      return `You got a D - ${studentPercentageResult}!`;
    } else {
      return `You got a F - ${studentPercentageResult}!`;
    }
};

let studentMessage = studentGrade(10);
console.log(studentMessage);