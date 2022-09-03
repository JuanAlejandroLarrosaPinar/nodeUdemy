
// Referencias del HTML
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('#btnCrear');


const socket = io();



socket.on('connect', () => {
    btnCrear.disabled=false;
    console.log('conectado');
});
 
socket.on('disconnect', () => {
    btnCrear.disabled=true; 
});

socket.on('ultimo-ticket', (ultimo)=>{
    console.log(ultimo);
    lblNuevoTicket.innerText = 'Ticket ' + ultimo;
})


btnCrear.addEventListener( 'click', () => {

    socket.emit('siguiente-ticket', null, (ticket)=>{
        console.log('Desde el server', ticket);
        lblNuevoTicket.innerText=ticket;
    })

});