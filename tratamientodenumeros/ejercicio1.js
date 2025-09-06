//Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número: ", (num) => {
    let numero = Number(num);

    console.log(`\nNúmero ingresado: ${numero}`);

    console.log(`El cuadrado del número: ${numero} es ${Math.pow(numero, 2)}`);
    console.log(`La raíz cuadrada del número: ${numero} es ${Math.sqrt(numero)}`);

    rl.close();
});