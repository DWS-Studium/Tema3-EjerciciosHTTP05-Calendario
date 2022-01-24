//Creamos el servidor
var http = require('http');
var url = require('url');
var server = http.createServer();
var moduloTablas = require('./modules/tabla.js');
var moduloCalculadora = require('./modules/calculadora.js');
var moduloCalendario = require('./modules/calendario.js');
server.on('request', function(peticion, respuesta) {
    //Obtenemos la URL y la descomponemos
    var url_peticion = url.parse(peticion.url, true);
    //Guardamos el pathname
    var pathname = url_peticion.pathname;
    //Optenemos los parametros
    var parametro = url_peticion.query;
    let codigo_respuesta = 200;
    //Comprobamos si el pathname es /tabla
    if (pathname == '/tabla') {
        var salida = '';
        salida += moduloTablas.multiplicar(parametro.num, parametro.min, parametro.max);
    } else if (pathname == '/calculadora') {
        var salida = '';
        salida += moduloCalculadora.calculadora(parametro.min, parametro.max, parametro.op);
    } else if (pathname == '/calendario') {
        var salida = '';
        salida += moduloCalendario.dias(parametro.anio, parametro.mes);
    } else if (pathname == '/') {
        var salida = '<h2>Bienvenido</h2>';
        salida += '<p>Entra en la URL tabla, para ver todas las tablas, añade el parametro num para mostrar la tabla que quieras, con los parametros min y max muesta las 2 tablas indicadas por parametro</p>';
        salida += '<p>Entra en la URL calculadora y añade el parametro num1 y num2 mas el parametro op para indicar el tipo de operacion multiplicar, dividir, sumar o restar.</p>';
    } else {
        var salida = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>404 Page Not Found</title><link href="http://fonts.googleapis.com/css?family=Amarante" rel="stylesheet" type="text/css"><body><h1>404 Page Not Found</h1></body></html>';
        codigo_respuesta = 404;
    }

    respuesta.writeHead(codigo_respuesta, { 'Content-Type': 'text/html;charset=utf-8' });
    respuesta.write(salida);
    respuesta.end();
});
server.listen(8080, '127.0.0.1', (err) => {
    //Verificamos que no halla error, si no lo mostrara por consola
    if (err) {
        return console.log('Error: ', err);
    }
    console.log('Servidor ejecutándose en http://127.0.0.1:8080/');
});