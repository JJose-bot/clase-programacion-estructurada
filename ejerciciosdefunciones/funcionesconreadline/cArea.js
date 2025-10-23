import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularArea(base, altura){
    let calculo = parseFloat(base * altura);
    return calculo;
}

rl.question("Ingrese la base del rectángulo: ", Base => {
    rl.question("Ingrese la altura del rectángulo: ", Altura => {
        let result = calcularArea(Base, Altura);

        console.log(`El área del rectángulo es: ${result}`);
        //console.log(`El área del rectángulo es:`, calcularArea(Base, Altura));
        rl.close();
    })
})