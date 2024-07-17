let miFuncion = function(){
    console.log("Hola!!!! Soy una función asignada a una variable");
}
miFuncion();

//Uso de la partícula This.
function Alumno(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = () => {
        console.log("Hola, soy " + this.nombre);
    }
}
const alumno1 = new Alumno("Pepito", 666);
alumno1.saluda();

class Alumno2{
    constructor (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    }
    saluda(){
        console.log("Hola, soy " + this.nombre);
    }
}

let alumno2 = new Alumno2("Chato", 20);
alumno2.saluda();

//Parámetros REST.

function sumar(...sumando){ //sumar(x, ...sumando) se puede añadir una variable distinta al inicio y luego los ..., pero al final no se puede.
    sumando.forEach(numero => console.log(numero));
    /* Versión ochentera */
    let total = 0;
    sumando.forEach(numerito => {
        total += numerito;
    });
    //console.log("total: " + total);
    return total;
}
sumar(1);
sumar(2, 3);
sumar(4, 5, 6, 7, 8, 9, 10);

console.log(sumar(4, 5, 6, 7, 8, 9, 10));