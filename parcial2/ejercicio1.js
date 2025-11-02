// Escriba un programa que solicite al usuario una cadena de texto (palabra o frase)
// utilizando la librería readline, el programa debe de contener una función que permita
// recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas
// alfabéticamente.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ordenarFrase (cadena){
    return cadena.split('').sort().join('');
}

rl.question("Ingrese el texto: ", (texto) => {
    let ordenar = ordenarFrase(texto);
    console.log("Cadena ordenada:", ordenar);
    rl.close();
});