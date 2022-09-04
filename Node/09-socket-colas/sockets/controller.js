const TicketControl = require("../models/ticket-control");

const ticketControl = new TicketControl();

const socketController = (socket) => {

    socket.emit('ultimo-ticket', ticketControl.ultimo);

    socket.on('disconnect', (socket) => {
        //console.log(`Cliente desconectado ${socket.id}`);
    });

    socket.on('siguiente-ticket', (payload, callback) => {
        const siguiente = ticketControl.siguiente();
        callback(siguiente);
    });

    socket.on('atender-ticket', ({escritorio}, callback)=>{
        
        if(!escritorio || escritorio===''){
            return callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            })
        }

        const ticket = ticketControl.atenderTicket(escritorio);
        
        if(!ticket){
            return callback({
                ok: false,
                msg: 'No hay más tickets que anteder'
            })
        }
        callback({
            ok: true,
            ticket
        })
    })

}

module.exports = {
    socketController
}