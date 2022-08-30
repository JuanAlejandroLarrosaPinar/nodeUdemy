# nodeUdemy

"12. Nodemon" -> con el comando "nodemon app.js" cada vez que se realiza un cambio se reinicia el servidor. Para instalarlo se hace con "npm install -g nodemon"

"33. package.json - init - install - uninstall": 
"npm init" -> Inicializar un proyecto node. Enter, establecemos versión 0.0.1, enter. Descripción: Simple tabla de multiplicar. Enter y enter y todo enter excepto author, que podemos poner nuestro nombre.
Al tener "base3": "node app --base=3" en la parte de test, al ejecutar "npm run base3" se ejecutaría la setencia "node app --base=3"
Instalar paquete de colores: "npm i colors"
Con "npm install nodemon --save-dev" se instalará nodemon sólo en desarrollo.
Si queremos desinstalar un paquete se hace con "npm uninstall colors". Para instalar x versión se realiza con "npm install colors@1.0.0"

"34. Yargs": instalación "npm i yargs". Para probarlo tenemos que ejecutar "node app --base=5" o "node app --base 5".
Con "node app --version" podemos consultar la versión de nuestra aplicación.
Con "node app --help" podemos ver la ayuda que nos ofrece la aplicación.

"37. Colores en consola" : 

"40. Respaldo del proyecto con en GitHub": esta sección ya se ha completado porque hemos colgado siempre de Github.

"49. Inquirer" : Para instalar el paquete hay que ejecutar "npm i inquirer@7.3.3". Nota: he tenido que utilizar la versión 7.3.3 porque la última no estaba funcionando correctamente.

"51.Lógica para el manejo de las tareas por hacer": instalar uuid "npm i uuid"

"71. Realizar peticiones HTTP desde Node": 1 - request. 2 - fetch, 3 - axios

"72. Mapbox Search API y token de acceso": https://www.mapbox.com/

"75 Variables de entorno": Utilizar paquete dotenv "npm i dotenv". Hay que tener un fichero .env donde estén las variables globales.

"77. Openweather - Información del clima": openweathermap.org. https://api.openweathermap.org/data/2.5/weather?lat=40.416705&lon=-3.703583&appid=21f26300a642a015a1e80d7807cda50a&units=metric&lang=es

"88. Introducción a EXPRESS": npm i express

"89. Servir contenido estático": creamos la carpeta púlico

"90. Servir un sitio web completo": en el ejercicio hay sitios donde no se le han quitado los .html para la redirección. Es decir, cuando pulsamos sobre un enlace hay sitios donde sigue apareciendo el sufijo ".html"

"91. Handlebars": npm install hbs Cogemos los ficheros CREDITS.txt, los 3 html y LICENSE.txt y los llevamos a una carpeta llamada template.

"94. Preparar Webserver para subir a un hosting": npm i dotenv

"95,96,97": No se realiza el despliegue en heroku porque no es necesario para el aprendizaje.

"105.CORS - Middleware": npm i cors

"118. Mongoose - Conectarnos a la base de datos": npm i mongoose

"121. BCryptJS - Encriptando la contraseña": npm i bcryptjs

"122. Validar campos obligatorios - Email": npm i express-validator

"137. Introducción a los tokens": un token está dividido en 3 partes : header, payload y firma. Header (contiene información del algoritmo utilizado),
payload: información que queramos. Firma para definir si el token es válido.

"142. Generar un JWT": npm i jsonwebtoken

"157. Validar Token de Google - Backend": npm install google-auth-library --save