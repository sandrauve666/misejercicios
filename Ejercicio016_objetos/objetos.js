/*Atributos:
- sprite
- posición
- estado
Métodos:
- disparar
- explotar
- moverse
*/

let enemigo1 = {
    sprite : "imagen.jpg",
    x : 0,
    y : 0,
    estado : "formacion",
    saludar(nombre) {
        console.log("Hello " + nombre);
    }
    
}

console.log(typeof enemigo1); //object
enemigo1.saludar("Nombre1");

//Creación de una clase con funciones.
function Enemigo(sprite, x, y, estado){
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.estado = estado;
    this.saludar = function(nombre){
        console.log("Hi " + nombre);
    }
}

let enemigo2 = new Enemigo("imagen.jpg", 1, 0, "enformacion");
console.log(typeof enemigo2); //object
enemigo2.saludar("Nombre2");

class Superenemigo {
    constructor(sprite, x, y){
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.estado = "enformacion"; //no es necesario this.estado = estado porque es el mismo valor por defecto (enformacion).
    }
    saludar(nombre){
        console.log("Hola " + nombre);
    }
}

let enemigo3 = new Superenemigo("imagen.png", 1, 1);
console.log(typeof enemigo3);
enemigo3.saludar("Nombre3");