const mongoose = require('mongoose');

const dbConnection = async()=>{
    try{
        //console.log(process.env.MONGODB_CNN);
        await mongoose.connect(process.env.MONGODB_CNN
            /*, {
            useNewUrlParser: true, //parametros obligatorios
            useUnifiedTopology:true, //parametros obligatorios
            useCreateIndex: true, //parametros obligatorios
            useFindAndModify: false //parametros obligatorios
            }*/
        );

        console.log('Base de datos online');
    }catch(error){
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}