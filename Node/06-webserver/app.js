const express = require('express');
const app = express();
const port = 8080;

//hbs
//TODO: require('hbs')
app.set('view engine', 'hbs');

//Servir contenido estático
app.use(express.static('public'));

app.get('/',(req, res)=>{
    //res.send('Hola mundo');
    res.render('home');
})


//GET
app.get('/', function(req, res){
    res.send('Home page')
});

app.get('/hola-mundo', function(req, res){
    res.send('Hola mundo en su respectiva ruta')
});

app.get('/index', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html'); 
});

app.get('/generic', (req, res)=>{
    res.sendFile(__dirname + '/public/generic.html'); 
});

app.get('/elements', (req, res)=>{
    res.sendFile(__dirname + '/public/elements.html'); 
});

app.get('*', function(req, res){
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html'); 
});

app.listen(port,()=>{
    console.log(`Aplicación corriendo en el puerto ${port}`);
});