// Cree una función que permita calcular el descuento de un producto. Solicite al usuario
// el precio de un producto y el porcentaje de descuento, devuelva el precio final.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuento(precioProducto, descuento){
    precioProducto = parseFloat(precioProducto);
    descuento = parseFloat(descuento);

    let desc = (precioProducto * descuento) / 100;

    let precioFinal = precioProducto - desc;
    return precioFinal;
}

rl.question("Ingrese el precio del producto: ", (precio) => {
    rl.question("Ingrese el porcentaje del descuento. Ej 20 para el 20%: ", (porcentaje) => {
        let resultado = calcularDescuento(precio, porcentaje);
        console.log(`El precio final es de $${resultado}`);
        rl.close();
    })
})