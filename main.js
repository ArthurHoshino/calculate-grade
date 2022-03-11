function calculateGrade(grade = 0) {
    grade = document.getElementById("someoneGrade").value;

    let round5 = Math.ceil(grade / 5) * 5; // next multiple of 5
    let comparator = round5 - grade;

    if (grade >= 100) {
        grade = 100;
        let newGrade = `Your grade is: ${grade}. Congratulations, you got a perfect grade!`;
        alert(newGrade);

    } else {
        let newGrade = ""

        if (comparator < 3) {
            if (grade >= 38) {
                grade = round5;

                newGrade = `Your grade is: ${grade}. You passed!`

                if (grade == 100) {
                    newGrade = `Your grade is: ${grade}. Congratulations, you got a perfect grade!`
                }

                alert(newGrade);
            }
        } else {
            if (grade >= 38) {
                newGrade = `Your grade is: ${grade}. You passed!`

                alert(newGrade);
            }
        }

    };

    if (grade < 38) {
        if (grade <= 0) {
            grade = 0;

            newGrade = `Your grade is zero. You failed!`
        } else {
            newGrade = `Your grade is: ${grade}. You failed!`
        }

        alert(newGrade);
        
    };

}