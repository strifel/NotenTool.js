let averageDisplay = document.getElementById('average');
let medianDisplay = document.getElementById('median');

function calculateStats() {
    calculateAverage();
    calculateMedian()
}
function calculateAverage() {
    let average = 0;
    let count = 0;
    tableContent.querySelectorAll('.row_grades').forEach((cGrade) => {
        let grade = parseInt(cGrade.innerText);
        if (grade) {
            average += grade;
            count++;
        }
    });
    average = average / count;
    if (count > 0) {
        averageDisplay.innerText = 'Average: ' + average.toFixed(2);
    } else {
        averageDisplay.innerText = '';
    }
}
function calculateMedian() {
    let grades = [];
    tableContent.querySelectorAll('.row_grades').forEach((cGrade) => {
       grades.push(parseInt(cGrade.innerText))
    });
    grades.sort((a, b) => a - b);
    if (grades.length > 0) {
        medianDisplay.innerText = 'Median: ' + grades[Math.floor((grades.length) / 2)];
    } else {
        medianDisplay.innerText = '';
    }
}
