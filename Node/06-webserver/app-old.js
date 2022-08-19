const http = require('http');

http.createServer((req, res)=>{
    //console.clear();
    //console.log(req);
    //texto plano
    /*res.writeHead(200, {'Content-Type':'text/plain'}); //201, 404 //text/plain
    const persona = {
        id:1,
        nombre: 'Juan Alejandro'
    }
    res.write(JSON.stringify(persona));*/
    //json
    /*res.writeHead(200, {'Content-Type':'application/json'}); //201, 404 //text/plain
    const persona = {
        id:1,
        nombre: 'Juan Alejandro'
    }
    res.write(JSON.stringify(persona));*/
    //csv
    //res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    //res.writeHead(200,{'Content-Type': 'application/csv'});
    //res.write('id, nombre\n');
    //res.write('1, Juan Alejandro\n');

    res.write('Hola mundo');
    res.end();
})
.listen(8080)