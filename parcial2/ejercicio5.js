// Cree un programa que solicite al usuario su salario base, el número de horas extras
// trabajadas y el valor de una hora de trabajo normal. Luego, calcule el salario total,
// considerando que cada hora extra se paga 1.5 del valor de la hora normal. Mostrar el
// resultado en la consola.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSalario (salarioBase, horasExtra, valorHora){
    salarioBase = parseFloat(salarioBase);
    horasExtra = parseFloat(horasExtra);
    valorHora = parseFloat(valorHora);

    let pagoExtra = horasExtra * (valorHora * 1.5);
    const salarioTotal = salarioBase + pagoExtra;
    
    return salarioTotal;
}

rl.question("Ingrese el salario base: " , (salario) => {
    rl.question("Ingrese el número de horas extra trabajadas: ", (horas) => {
        rl.question("Ingrese el valor de una hora de trabajo normal: ", (valor) => {
            let salarioFinal = calcularSalario(salario, horas, valor);
            console.log(`El salario total es de $${salarioFinal}`);
            rl.close();
        })
    }) 
})