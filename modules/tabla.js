exports.multiplicar = function(num, min, max) {
    var salida = '';
    if (num != null) {
        salida += '<h2>Tabla del ' + num + '</h2>';
        for (z = 0; z <= 10; z++) {
            salida += num + ' x ' + z + ' = ' + num * z + '<br />';
        }
    } else if (min != null & max != null & min <= max) {
        salida += '<h1>Mostrando Tabla del ' + min + ' al ' + max + '</h1>';
        for (min; min <= max; min++) {
            salida += '<h2>Tabla del ' + min + '</h2>';
            for (z = 0; z <= 10; z++) {
                salida += min + ' x ' + z + ' = ' + min * z + '<br />';
            }
        }
    } else {
        var salida = '';
        for (i = 0; i <= 10; i++) {
            salida += '<h2>Tabla del ' + i + '</h2>';
            for (z = 0; z <= 10; z++) {
                salida += i + ' x ' + z + ' = ' + i * z + '<br />';
            }
        }
    }
    return salida
}