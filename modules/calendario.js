exports.dias = function(anio, mes) {
    var salida = '';
    var date = new Date(anio + '-' + mes + '-01');
    var primerDia = new Date(date.getFullYear(), date.getMonth(), 1);
    var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var dia = "" + ultimoDia.getDate();

    var semana = "" + primerDia.getDay();
    let z = semana;
    salida += '<table>';
    salida += '<tr><th>L</th><th>M</th><th>X</th><th>J</th><th>V</th><th>S</th><th>D</th></tr>';
    salida += '<tr>';
    for (let i = 1; i <= dia; i++) {
        if (semana == 0) {}
        if (semana == 1) {}
        if (semana == 2) {
            for (let y = 1; y <= 1; y++) {
                salida += '<td>*</td>';
            }
            semana = null;
        }
        if (semana == 3) {
            for (let y = 1; y <= 2; y++) {
                salida += '<td>*</td>';
            }
            semana = null;
        }
        if (semana == 4) {
            for (let y = 1; y <= 3; y++) {
                salida += '<td>*</td>';
            }
            semana = null;
        }
        if (semana == 5) {
            for (let y = 1; y <= 4; y++) {
                salida += '<td>*</td>';
            }
            semana = null;
        }
        if (semana == 6) {
            for (let y = 1; y <= 5; y++) {
                salida += '<td>*</td>';
            }
            semana = null;
        }
        salida += '<td>' + i + '</td>';
        if (z > 6) {
            salida += '</tr>';
            z = 0;
        }
        z++;
    }
    salida += '</table>';
    return salida;
}