const socket = io();

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


socket.on('connect', ()=>{
    console.log('Conectado');
    lblOnline.style.display='';
    lblOffline.style.display='none';
});

socket.on('disconnect',()=>{
    console.log('Desconectado');
    lblOnline.style.display='none';
    lblOffline.style.display=''; 
});

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    console.log('enviar mensaje');
    const payload = {
        mensaje,
        id:'12345',
        fecha:new Date()
    }
    socket.emit('enviar-mensaje', payload);
})