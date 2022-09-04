
const searchParams = new URLSearchParams(window.location.search);

const lblEscritorio = document.querySelector('#lblEscritorio');
const btnAtender = document.querySelector('#btnAtender');

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
console.log(escritorio);


// Referencias del HTML
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('#btnCrear');

const socket = io();

socket.on('connect', () => {
    btnAtender.disabled=false;
    console.log('conectado');
});
 
socket.on('disconnect', () => {
    btnAtender.disabled=true; 
});

socket.on('ultimo-ticket', (ultimo)=>{
    console.log(ultimo);
    //lblNuevoTicket.innerText = 'Ticket ' + ultimo;
})


btnAtender.addEventListener( 'click', () => {

    socket.emit('atender', null, (ticket)=>{
        
    })

});
