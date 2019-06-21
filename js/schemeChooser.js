let chooser = document.getElementById('loadScheme');
let points = document.getElementById('maxPoints');
let maximumPoints = points.value == null ? 0 : parseInt(points.value);
let percentages = null;
chooser.onchange = () => {
    points.disabled = false;
    let file = chooser.files[0];
    if (file === null) alert('Please choose a file!');
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = () => {
        let fileContent = reader.result;
        percentages = {};
        fileContent.split('\n').forEach((row) => {
            let cols = row.split(',');
            if (cols.length === 2) {
                let points = parseInt(cols[0]);
                for (let percentage = parseInt(cols[1]); percentage >= 0; percentage--) {
                    if (percentages.hasOwnProperty(percentage)) break;
                    percentages[percentage] = points;
                }
            }
        } );
        calculateAllGrades();
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
