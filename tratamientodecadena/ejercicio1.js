//En un formulario web pides al usuario su nombre completo y quieres asegurarte de que no haya espacios al inicio o final, y además quieres mostrar cuántos caracteres tiene el nombre sin contar los espacios.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre completo: ", (nombre) => {
    const nombreCompleto = nombre.replace(/\s/g, "").length;
    console.log(`Su nombre es ${nombre} y tiene ${nombreCompleto} carácteres`);

    rl.close();
});