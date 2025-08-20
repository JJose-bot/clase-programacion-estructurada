// Un estudiante aprueba si su nota es mayor o igual a 7 o si pasó la
// recuperación, crea las variables nota y recuperación. Utiliza el operador
// lógico que creas conveniente e imprime el mensaje.

let nota = 4;
let recuperacion = true;

if (nota >= 7 || recuperacion) {
    console.log("Has pasado la materia");
} else {
    console.log("Has reprobado la materia");
}

console.log(nota >= 7 || recuperacion ? "Has pasado la materia" : "Has reprobado la materia"); //Con el operador terniario como se explicó en la clase