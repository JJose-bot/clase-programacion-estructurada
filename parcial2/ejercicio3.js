// Escriba un programa que solicite al usuario el precio de tres productos, y cree una
// función que permita calcular la suma total del precio de los tres productos, mostrar en
// consola la suma.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumar (n1, n2, n3){
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);

    let sum = n1 + n2 + n3;
    return sum;
}

rl.question("Ingrese el precio del primer producto: ", (num1) => {
    rl.question("Ingrese el precio del segundo producto: ", (num2) => {
        rl.question("Ingrese el precio del tercer producto: ", (num3) => {
            console.log(`La suma de los tres productos es: $${sumar(num1, num2, num3)}`);
            rl.close();
        });
    });
});
