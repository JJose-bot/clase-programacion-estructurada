// 1. Calcular el cuadrado de un número 
let numCuadrado = (num) => {
    let resultado = num * num;
    return resultado;
}
console.log("El número elevado al cuadrado es:", numCuadrado(2));

// 2. Calcular el promedio de 3 números 
let promedio = (num1, num2, num3) => (num1 + num2 + num3)/3;
console.log("El promedio de los tres números es:", promedio(10,7,9));

// 3. Calcular el área de un triángulo 
let areaTriangulo = (base, altura) => (base * altura)/2;
console.log("El área del triángulo es:", areaTriangulo(10, 6));