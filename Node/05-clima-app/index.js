const { leerInput } = require("./helpers/inquirer")

const main = async()=>{
    const texto = await leerInput('Escriba un dato');
    console.log(texto);
}

main();