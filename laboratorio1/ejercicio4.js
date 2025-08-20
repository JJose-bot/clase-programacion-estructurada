// Solicita el ancho y alto de un rectángulo y muestra su perímetro.
// Formula: perimetro = 2 * (a + h);

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe el ancho del rectángulo: ", (ancho) => {
    rl.question("Escribe la altura del rectángulo: ", (altura) => {
        const anchoF = parseFloat(ancho);
        const alturaF = parseFloat(altura);
        const perimetro = 2 * (anchoF + alturaF)

        console.log(`El perimetro del rectángulo es ${perimetro}`);
        rl.close();
    })
})