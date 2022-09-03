const socket = io();

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

socket.on('connect', ()=>{
    console.log('Conectado');
    lblOnline.style.display='';
    lblOffline.style.display='none';
});

socket.on('disconnect',()=>{
    console.log('Desconectado');
    lblOnline.style.display='none';
    lblOffline.style.display=''; 
})