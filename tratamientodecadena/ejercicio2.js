//Un sistema de registro de usuarios necesita guardar todos los correos electrónicos en minúsculas para evitar duplicados causados por diferencias en mayúsculas y minúsculas. Además, se requiere verificar si el correo pertenece al dominio @gmail.com antes de aceptarlo.
// El programa debe:
// Solicitar al usuario su correo electrónico.
// Convertir el correo ingresado a minúsculas.
// Verificar si contiene el dominio @gmail.com.
// Mostrar en pantalla el correo normalizado y si es o no un dominio válido.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su correo electrónico: ", (correo) => {
    const correoLower = correo.trim().toLowerCase();
    const correoInclude = correoLower.endsWith('@gmail.com');

    if (correoInclude) {
        console.log(`Su correo ${correoLower} es válido`);
    } else {
        console.log(`Su correo ${correoLower} no es válido`);
    }

    rl.close();
});