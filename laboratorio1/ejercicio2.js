// Solicita al usuario 3 nota y obtén el promedio, mostrar en pantalla las 3
// notas y el promedio calculado.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera nota: ", (nota1) => {
    rl.question("Ingrese la segunda nota: ", (nota2) => {
        rl.question("Ingrese la segunda nota: ", (nota3) => {
            const n1 = parseFloat(nota1);
            const n2 = parseFloat(nota2);
            const n3 = parseFloat(nota3);
            const promedio = (n1+n2+n3)/3

        console.log(`El promedio de las notas ${nota1}, ${nota2}, ${nota3} es: ${promedio}`);
        
        rl.close();
        })
    })

})