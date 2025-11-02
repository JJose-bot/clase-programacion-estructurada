// Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una
// función que reciba como parámetro el texto y devuelva la cantidad de caracteres que
// contiene

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarCaracteres (caracteres){
    let eliminarEspacios = caracteres.replace(/\s+/g, '');
    return eliminarEspacios.length;
}

rl.question("Ingrese el texto: ", (texto) => {
    let contar = contarCaracteres(texto);
    console.log("La cantidad de carácteres en el texto es:", contar);
    rl.close();
});