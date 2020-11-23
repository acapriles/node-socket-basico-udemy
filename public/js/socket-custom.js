let socket = io();

//Función que realiza la conexión permanente Cliente/Servidor
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// on = Escuchar información
// emit = Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Anderson Capriles',
    mensaje: 'Esto es una prueba de envío'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log('Info enviada desde el servidor: ', mensaje);
});