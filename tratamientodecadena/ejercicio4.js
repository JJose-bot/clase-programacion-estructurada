//Un programador quiere saber en qué parte de su mensaje aparece la palabra error.
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escriba el mensaje: ", (mensaje) => {
    const msj = mensaje.toLowerCase().indexOf('error');
    console.log(`La palabra "error" se encuentra desde el índice: ${msj}`);

    rl.close();
});