const mostrarMenu = ( ) => {

    return new Promise( resolve =>{
        console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.green);
        console.log(`★   `.green + `Seleccione una opción`.yellow +`   ★`.green);
        console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.green);
        console.log(`★  `.green + `${'1.'}`.red + ` Crear nuevo producto`.magenta+`  ★`.green);
        console.log(`★  `.green + `${'2.'}`.red  + ` Listar producto`.magenta+`       ★`.green);
        console.log(`★  `.green + `${'3.'}`.red  + ` Listar clientes`.magenta+`       ★`.green);
        console.log(`★  `.green + `${'4.'}`.red  + ` Listar pedidos`.magenta+`        ★`.green);
        console.log(`★  `.green + `${'5.'}`.red  + ` Enviar pedidos`.magenta+`        ★`.green);
        console.log(`★  `.green + `${'6.'}`.red  + ` Borrar pedido`.magenta+`         ★`.green);
        console.log(`★  `.green + `${'0.'}`.red  + `  Salir`.magenta+`                ★`.green);
        console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★\n`.green);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLine.question(`Selecione una opción: `.blue, (opt) => {
            readLine.close( );
            resolve(opt);
        })
    })
};

const pausa = ( ) => {
    return new Promise (resolve =>{

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question(`\n Presione ${'ENTER'} para continuar\n`.cyan, (opt) =>{
            readLine.close( );
            resolve(opt);
        })
    })
};

module.exports = {
    mostrarMenu,
    pausa
}