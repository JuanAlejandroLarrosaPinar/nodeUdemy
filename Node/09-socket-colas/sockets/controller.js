const TicketControl = require("../models/ticket-control");

const ticketControl = new TicketControl();

const socketController = (socket) => {

    socket.on('disconnect', (socket) => {
        //console.log(`Cliente desconectado ${socket.id}`);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456;//id de ejemplo que generamos en bbdd al guardar x registro
        callback(id);//al invocar al callback es una manera de decirle al cliente que todo se ha realizado ok
        socket.broadcast.emit('enviar-mensaje', payload);
    });

}

module.exports = {
    socketController
}