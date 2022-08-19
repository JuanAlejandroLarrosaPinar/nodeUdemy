const express = require('express');
const app = express();
const port = 8080;

//Servir contenido estático
app.use(express.static('public'));

//GET
app.get('/', function(req, res){
    res.send('Home page')
});

app.get('/hola-mundo', function(req, res){
    res.send('Hola mundo en su respectiva ruta')
});

app.get('*', function(req, res){
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html'); 
});

app.listen(port,()=>{
    console.log(`Aplicación corriendo en el puerto ${port}`);
});