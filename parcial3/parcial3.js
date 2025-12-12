//Sistema de gestión de estudiantes

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let estudiantes = [];

function menuOpciones() {
    console.log(`
SISTEMA DE GESTION DE ESTUDIANTES

1. Registrar estudiante
2. Busqueda por nombre
3. Listado general
4. Salir
`);

    rl.question("Elija una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                registrarEstudiante();
                break;
            case "2":
                busquedaPorNombre();
                break;
            case "3":
                listadoGeneral();
                break;
            case "4":
                rl.close();
                break;
            default:
                console.log("\nINGRESE UNA OPCIÓN VÁLIDA");
                menuOpciones();
                break;
        }
    });
}

function actualizarRegistro(nombre, edad, notas, promedio, estado) {
    const estudiante = {
        informacion: {
            nombre,
            edad
        },
        calificacion: {
            notas,
            promedio,
            estado
        }
    };

    estudiantes.push(estudiante);
}

function registrarEstudiante() {
    rl.question("Nombre del estudiante: ", (nombre) => {
        rl.question("Edad del estudiante: ", (edad) => {
            rl.question("Ingrese la primera nota del estudiante: ", (n1) => {
                rl.question("Ingrese la segunda nota: ", (n2) => {
                    rl.question("Ingrese la tercera nota: ", (n3) => {
                        n1 = parseFloat(n1);
                        n2 = parseFloat(n2);
                        n3 = parseFloat(n3);
                        let notas = [n1, n2, n3];
                        let promedio = calcularPromedio(n1, n2, n3);
                        let estado;
                        if (promedio < 6) {
                            estado = "Reprobado"
                        } else {
                            estado = "Aprobado"
                        }
                        actualizarRegistro(nombre, edad, notas, promedio, estado)
                        console.log("\nESTUDIANTE REGISTRADO EXITOSAMENTE");
                        menuOpciones();
                    })
                })
            })
        })
    })
}

function listadoGeneral() {
    console.log("LISTADO GENERAL DE ESTUDIANTES");
    estudiantes.forEach(estudiantes => console.log(estudiantes));

    menuOpciones();
}

function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function busquedaPorNombre(nombre) {
    rl.question("Ingrese el nombre del estudiante: ", (nombre) => {
        let resultado = estudiantes.find(estudiante => estudiante.informacion.nombre.toLowerCase() === nombre.toLowerCase());

        if (resultado) {
            console.log("\nEstudiante encontrado exitosamente:");
            console.log(resultado);
        } else {
            console.log("\nError: Estudiante no encontrado");
        }

        menuOpciones();
    });
}

menuOpciones();


