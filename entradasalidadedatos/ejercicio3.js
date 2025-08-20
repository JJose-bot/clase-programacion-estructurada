// Crea un programa en Node.js que permita calcular el costo total de una compra. El
// programa debe: Solicitar al usuario el precio unitario de un producto (puede ser
// decimal), solicitar la cantidad de productos comprados (entero). Calcular el costo
// total multiplicando el precio unitario por la cantidad.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe el precio unitario del producto: ", (precio) => {
    rl.question("Escribe la cantidad del producto: ", (cantidad) =>{
        const precioUnitario = parseFloat(precio); 
        const cantidadTotal = parseInt(cantidad);
        const costoTotal = precioUnitario * cantidadTotal;
        
        console.log(`Cantidad de productos comprados: ${cantidadTotal}\nCosto del producto: ${precio}\nTotal a pagar: ${costoTotal}`)

        rl.close();
    })
})
