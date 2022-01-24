exports.calculadora = function(min, max, op) {
    var salida = '';
    if (min != null & max != null & op != null) {
        if (op == 'multiplicar') {
            salida += 'La multiplicacion entre ' + min + ' y ' + max + ' da como resultado ' + (min * max);
        } else if (op == 'dividir') {
            salida += 'La divicion entre ' + min + ' y ' + max + ' da como resultado ' + (min / max);
        } else if (op == 'sumar') {
            salida += 'La suma entre ' + min + ' y ' + max + ' da como resultado ' + (min + max);
        } else if (op == 'restar') {
            salida += 'La resta entre ' + min + ' y ' + max + ' da como resultado ' + (min - max);
        }
    } else {
        var salida = '<h2>Bienvenido</h2>';
        salida += '<p>se necesitan los 3 parametros, Vuelve a intertarlo</p>';
    }
    return salida
}