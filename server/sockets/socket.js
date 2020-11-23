const { io } = require('../server');

// on = Escuchar información
io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    // "enviarMensaje" nombre definido también del lado del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Renvía el mensaje a todos los clientes conectados
        client.broadcast.emit('enviarMensaje', data);

        /* if (mensaje.usuario) {
            callback({
                mensaje: 'Todo salió bien'
            });
        } else {
            callback({
                mensaje: 'Todo salió mal'
            });
        } */

    });

});