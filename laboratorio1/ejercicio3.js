// Solicitar a un cliente el precio de un producto (decimal) y muestra el
// precio final con un 15% de descuento aplicado. Mostrar en consola el
// precio del producto, el descuento obtenido y el precio a pagar.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe el precio del producto: ", (precio) =>{
    const precioF = parseFloat(precio);
    const porcentaje = 15;
    const descuento = precioF - (precioF * (porcentaje / 100));

    console.log(`El precio del producto es de $${precio} se ha obtenido un descuento del ${porcentaje}% y el precio a pagar es de ${descuento}`);

    rl.close();
})