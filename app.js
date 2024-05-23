console.log("Hello world");
var contador = 1;

document.getElementById('addButton').addEventListener('click', function() {

    var nombre = document.getElementById('inputName').value;
    var materia = document.getElementById('inputMateria').value;
    var faltas = document.getElementById('inputFaltas').value;
    var CheckAprobado = document.getElementById('gridCheck').checked;
    var Aprobado = CheckAprobado ? "Sí" : "No";


    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th scope="row">${contador}</th>
        <td>${nombre}</td>
        <td>${materia}</td>
        <td>${faltas}</td>
        <td>${Aprobado}</td>
    `;
    document.querySelector('#contenido').appendChild(newRow);
    contador++;
});