
const searchParams = new URLSearchParams(window.location.search);

// Referencias del HTML
const lblEscritorio = document.querySelector('#lblEscritorio');
const btnAtender = document.querySelector('#btnAtender');
const divAlerta = document.querySelector('#divAlerta');
const lblTicketsAtender = document.querySelector('#lblTicketsAtender');
const lblAtendiendo = document.querySelector('#lblAtendiendo');
const lblPendientes = document.querySelector('#lblPendientes');

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
console.log(escritorio);





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
});

socket.on('tickets-pendientes', (total)=>{
    console.log(total);
    if(total==0){
        divAlerta.className ='alert alert-danger mt-2';
    }else{
        divAlerta.className ='alert alert-info mt-2';
        lblTicketsAtender.innerText='';
    }

    lblPendientes.innerText=total;
    
    
})


btnAtender.addEventListener( 'click', () => {
    
    socket.emit('atender-ticket', {escritorio}, ({ok, ticket, msg })=>{
        console.log(ok, ticket, msg);
        if(!ok){
            lblAtendiendo.innerText=`Nadie`;
            lblTicketsAtender.innerText=msg;
            return divAlerta.className ='alert alert-danger mt-2';
        }else{
            lblAtendiendo.innerText=`Ticket ${ticket.numero}`;
            lblTicketsAtender.innerText='';
            return divAlerta.className ='alert alert-info mt-2';
        }

        
    });

});
