let tableContent = document.getElementById('table');

function addPupil(name) {
    let row = document.createElement('tr');
    row.id = 'row_' + name;
    row.innerHTML = `
<td id="row_${name}_name" class="row_name">${name}</td>
<td id="row_${name}_points" class="row_points"></td>
<td id="row_${name}_grades" class="row_grades"></td>
<td class="row_edit"><div class="btn-group"><button onclick="document.getElementById('row_${name}').remove();" class="btn btn-danger">\t&#128465;</button><button onclick="document.getElementById('editUser_name').innerText = '${name}';document.getElementById('editModal').style.display = 'block';" class="btn btn-warning">✏</button></div></td>`
    tableContent.appendChild(row);
}

function setPoints(name, points) {
    document.getElementById('row_' + name + '_points').innerText = points
}

function calculateGrades(name) {

}
function downloadData() {
    let link = document.createElement('a');
    link.download = 'user.csv';
    link.href = 'data:,';
    document.querySelectorAll('.row_name').forEach((element) => {
        let points = document.getElementById('row_' + element.innerText + '_points').innerText;
        let grade = document.getElementById('row_' + element.innerText + '_grades').innerText;
        link.href += element.innerText + ',' + points + ',' + grade + '%0A'
    });
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
}
