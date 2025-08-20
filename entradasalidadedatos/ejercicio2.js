// Solicita una cantidad en kilómetros (decimal), convierte a millas, sabiendo que 1km
// = 0.621371mi. Muestra el resultado con dos decimales.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de kilometros a convertir a millas: ", (kilometros) => {
    const km = parseFloat(kilometros);
    const mi = km * 0.621371;

    console.log(`${kilometros} km convertido a millas es ${mi}`);
    
    rl.close();
})