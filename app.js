//Se carga la librería colors para permitir el uso de estilos de colores en la terminal.
require('colors');

//Se carga el código que contiene el archivo 'menu' en la carpeta 'proy_modules'.
const {mostrarMenu, pausa} = require('./proy_modules/menu');

//Se declara una función flecha llamada main y que es asíncrona
const main = async( ) => {

    // Limpia la consola antes de imprimir el menú principal
    console.clear( );

    //Se solicita imprimir un encabezado en la consola y que sea de color rojo, se añade diseño.
    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★`.blue);
    console.log(`★     `.blue +     `Menú principal`.red     +`      ★`.blue);
    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★\n`.blue);

    //Se declara una variable llamada option y se inicializa con un string vacio
    let option = ' ';


    //Este bucle se ejecutará al menos una vez y continuará repitiéndose mientras la variable option no sea igual a '0'
    do{
        /*Este bucle do se ejecutará al menos una vez y continuará repitiéndose mientras la variable option no 
        esté en el rango válido de opciones*/
        do{
            /*Se utiliza la función mostrarMenu( ) para mostrar un menú al usuario y obtener la opción seleccionada.
             El resultado se almacena en la variable option. */
            option = await mostrarMenu( );
        }while(! (option >=0 && option <=6))

        /*Si option no es igual a '0' (salir), se imprime un mensaje indicando que se ejecutará el proceso 
        asociado con la opción seleccionada.*/
        if (option !== '0'){
            console.log(`\n Se ejecuta el proceso ${option}`.green);
            /*Se utiliza la función pausa( ) para pausar la ejecución del programa y esperar a que el usuario presione
            una tecla antes de continuar*/
            await pausa( );
        }
    /*El bucle se repetirá mientras option !== '0', lo que significa que continuará solicitando opciones del menú
    hasta que el usuario elija salir. */
    }while(option !== '0');
};

//Fin de la función main
main();