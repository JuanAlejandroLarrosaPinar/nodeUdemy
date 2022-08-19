const http = require('http');

http.createServer((request, response)=>{
    response.write('Hola mundo');
    response.end();
})
.listen(8080)