function calculateAllGrades() {
    if (!maximumPoints) return;
    if (!gradePercentages) return;
    for (let grade = 15; grade >= 0; grade--) {
        let percentage = gradePercentages[grade];
        let points = maximumPoints / 100 * percentage;
        document.getElementById('output_grade_' + grade).innerText = points + '';
    }
}
