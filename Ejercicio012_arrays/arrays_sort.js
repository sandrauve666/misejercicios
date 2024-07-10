class Vehiculo {
    constructor(nombre, precio, consumo) {
        console.log("Constructor....");
        this.nombre = nombre;
        this.precio = precio;
        this.consumo = consumo;
    }
}

let vehiculos = [];

let jcCar = new Vehiculo("Seat Ibiza", 10_000, 5.3);
let fpCar = new Vehiculo("KIA CEED", 9_500, 6.4);
let laraCar = new Vehiculo("Mercedes", 35_500, 6.4);

vehiculos.push(jcCar);
vehiculos.push(fpCar);
vehiculos.push(laraCar);
console.log(vehiculos);

vehiculos.sort((v1,v2)=>v1.consumo-v2.consumo).reverse(); //ordena de mayor a menor, reverse invierte el orden.
console.log(vehiculos);