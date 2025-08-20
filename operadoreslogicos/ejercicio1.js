// Una persona puede entrar al cine si tiene una entrada válida y es mayor
// de 13 años, Crea las variables Entrada y edad, utiliza el operador lógico
// que creas que se aplica e imprime el mensaje de si puede entrar o no
// puede entrar.

let entrada = true; 
let edad = 13; 

if (entrada && edad >= 13) { //operador AND para verificar si se cumplen ambas condiciones
    console.log("Puedes entrar");
} else {
    console.log("No puede entrar");
}

console.log(entrada && edad >= 13 ? "Puedes entrar" : "No puede entrar"); //Con el operador terniario como se explicó en la clase