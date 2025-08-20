// Un cliente recibe un descuento especial si es mayor de 60 años o si es
// persona con discapacidad, usa las variables edad y discapacitado, emplea
// el operador que crees que se aplica, imprime el resultado.

let edad = 60;
let discapacitado = false;

if (edad >= 60 || discapacitado) { //Operador OR para verificar si una de las dos condiciones se cumple
    console.log("Descuento disponible");
} else {
    console.log("No hay descuento");
}

let descuento = edad >= 60 || discapacitado ? "Descuento disponible" : "No hay descuento"; //Con el operador terniario como se explicó en la clase
console.log(`¿Tiene descuento?: ${descuento}`); 