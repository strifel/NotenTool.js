let chooser = document.getElementById('loadScheme');
let points = document.getElementById('maxPoints');
let maximumPoints = points.value == null ? 0 : parseInt(points.value);
let percentages = null;
let gradePercentages = null;

function load(content) {
    localStorage.setItem("currentScheme", content);
    percentages = {};
    gradePercentages = {};
    content.split('\n').forEach((row) => {
        let cols = row.split(',');
        if (cols.length === 2) {
            let points = parseInt(cols[0]);
            gradePercentages[points] = parseInt(cols[1]);
            for (let percentage = parseInt(cols[1]); percentage >= 0; percentage--) {
                if (percentages.hasOwnProperty(percentage)) break;
                percentages[percentage] = points;
            }
        }
    } );
    if (percentages[100]) {
        calculateAllGrades();
    } else {
        alert("Scheme is corrupt");
        percentages = null;
        gradePercentages = null;
    }
    points.disabled = false;
}

chooser.onchange = () => {
    let file = chooser.files[0];
    if (file === null) alert('Please choose a file!');
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = () => {
        load(reader.result);
    }
};
points.onchange = () => {
    if (percentages) {
        let maxPoints = parseInt(points.value);
        if (maxPoints > 0) {
            maximumPoints = maxPoints;
            calculateAllGrades();
        }
    } else {
        points.value = '';
        points.disabled = true;
    }
};

if (localStorage.getItem("currentScheme") != null) {
    load(localStorage.getItem("currentScheme").replace(/%0A/g, '\n'));
}
