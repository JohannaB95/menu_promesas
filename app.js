const colors = require('colors');

const {mostrarMenu, pausa} = require('./proy_modules/menu');

const main = async( ) => {

    console.clear( );

    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★`.blue);
    console.log(`★     `.blue +     `Menú principal`.red     +`      ★`.blue);
    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★\n`.blue);

    let option = ' ';

    do{
        do{
            option = await mostrarMenu( );
        }while(! (option >=0 && option <=6))

        if (option !== '0'){
            console.log(`\n Se ejecuta el proceso ${option}`.green);
            await pausa( );
        }
    }while(option !== '0');
};

main( );