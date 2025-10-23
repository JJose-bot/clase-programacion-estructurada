import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularDescuento(precio, descuento){
    precio = parseFloat(precio);
    descuento = parseFloat(descuento);

    let desc = precio * descuento;
    let totalPagar = precio - desc;

    console.log(`El descuento del producto obtenido es de $${desc} \nTotal a pagar es de $${totalPagar}`);
}

rl.question("Ingrese el precio del producto: ", Precio =>{
    rl.question("Ingrese el descuento a aplicar expresado en decimales. Ej 0.20 para el 20%: ", Descuento =>{
        calcularDescuento(Precio, Descuento);
        rl.close();
    })
})