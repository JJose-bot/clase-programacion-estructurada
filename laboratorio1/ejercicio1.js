// Solicita al usuario que ingrese una cantidad en metros (puede ser entero
// o decimal), muestra esa medida de metros en centímetros.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de metros a convertir en centímetros: ", (metros) => {
    const m = parseInt(metros);
    const convertir = m * 100;

    console.log(`${metros} metros son ${convertir} centímetros`);
    rl.close();
})