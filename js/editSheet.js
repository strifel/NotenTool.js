function validatePercentage(grade) {
    let percentage = parseInt(document.getElementById("grade" + grade).value);
    if (grade === 15) {
        document.getElementById("grade15").value = "100";
        return;
    }
    if (grade !== 15 && percentage !== 100) {
        if (percentage > parseInt(document.getElementById("grade" + (grade + 1)).value)) {
            document.getElementById("grade" + (grade + 1)).value = (percentage + 1) + "";
            validatePercentage(grade + 1)
        }
    } else if (grade !== 15 && percentage === 100) {
        alert("Percentage should not be 100 while grade is not 15")
    }
    if (grade !== 0 && percentage !== 0) {
        if (percentage < parseInt(document.getElementById("grade" + (grade - 1)).value)) {
            document.getElementById("grade" + (grade - 1)).value = (percentage - 1) + "";
            validatePercentage(grade - 1)
        }
    } else if (grade !== 0 && percentage === 0) {
        alert("Percentage should not be 0 while grade is not 0")
    }
}

function downloadConfig() {
    let link = document.createElement('a');
    link.download = 'grades.ntt';
    link.href = 'data:,';
    for (let grade = 0; grade <= 15; grade++) {
        let percentage = document.getElementById("grade" + grade).value;
        link.href += grade + "," + percentage + (grade !== 15 ? "%0A" : "");
    }
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
}
