//Se crea una función constante que es una función flecha llamada mostrarMenu
const mostrarMenu = () => {

     // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
     return new Promise(resolve => {
        // Muestra el menú en la consola con diferentes opciones, dependiendo de lo que se necesite realizar
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

         // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });
        //Le indica al usuario que debe escoger una opción del menu
        readLine.question(`Selecione una opción: `.blue, (opt) => {
            // Se cierra la interfaz de lectura
            readLine.close( );
            // Se resuelve la promesa con la opción seleccionada por el usuario
            resolve(opt);
        })
    })
};

//Se crea una función constante que es una función flecha llamada pausa
const pausa = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {
        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        })
        // Se le pide al usuario que presione ENTER para continuar
        readLine.question(`\n Presione ${'ENTER'} para continuar\n`.cyan, (opt) => {
            // Una vez que el usuario presiona ENTER, se cierra la interfaz de lectura y se resuelve la promesa
            readLine.close();
            resolve(opt);
        })
    })
};

// Exporta un objeto que contiene varias funciones utilizadas en el módulo app.js
module.exports = {
    mostrarMenu,
    pausa
};