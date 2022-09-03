const socketController = (socket) => {

    socket.on('disconnect', (socket) => {
        //console.log(`Cliente desconectado ${socket.id}`);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        //console.log('Mensaje: ', payload);
        //this.io.emit('enviar-mensaje', payload);//podemos emitir desde el io o desde el mismo socket
        socket.broadcast.emit('enviar-mensaje', payload);

        const id = 123456;//id de ejemplo que generamos en bbdd al guardar x registro
        callback(id);//al invocar al callback es una manera de decirle al cliente que todo se ha realizado ok
    });

}

module.exports = {
    socketController
}