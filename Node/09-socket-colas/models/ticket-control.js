
const path = require('path');
const fs = require('fs');

class Ticket {
    constructor(numero, escritorio){
        this.numero = numero;
        this.escritorio = escritorio;
    }
}

class TicketControl{

    constructor(){
        this.ultimo = 0;
        this.hoy = new Date().getDate()
        this.tickets = [];
        this.ultimos4 = [];

        this.init();

    }

    get toJson(){
        return {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        }
    }

    init(){
        const {hoy, tickets, ultimos4, ultimo} = require('../db/data.json');
        if(hoy===this.hoy){
            this.tickets = tickets;
            this.ultimo = ultimo;
            this.ultimos4 = ultimos4;
            console.log('hoy');
        }else{
            this.guardarDB();
        }
        
    }

    guardarDB(){
        const dbPath = path.join(__dirname,'../db/data.json');
        console.log(this.toJson);
        fs.writeFileSync(dbPath, JSON.stringify(this.toJson));
    }

    siguiente(){
        this.ultimo++;
        const ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket);
        this.guardarDB();
        return 'Ticket ' + this.ultimo;
    }

    atenderTicket(escritorio){
        // No tenemos tickets
        if(this.tickets.length===0){
            return null;
        }

        const ticket =  this.tickets.shift(); //borra el primer elemento y lo borra -> this.tickets[0]
        ticket.escritorio = escritorio;
        this.ultimos4.unshift(ticket); //añade
        
        if(this.ultimos4.length>4){
            this.ultimos4.splice(-1,1);
        }

        console.log(ultimos4);

        this.guardarDB();

        return ticket;

    }
}

module.exports = TicketControl;