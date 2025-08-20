// Solicita el precio de un producto (decimal). Calcula y muestra en consola
// el precio del producto, el IVA (13%) y el precio total (precio + IVA).

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", (precio) => {
    const precioF = parseFloat(precio);
    const porcentajeIva = 0.13;
    const iva = precioF * porcentajeIva;
    const total = precioF + iva;

    console.log(`Precio del producto: $${precio}\nIVA: $${iva}\nPrecio total: $${total}`)
    rl.close();
})