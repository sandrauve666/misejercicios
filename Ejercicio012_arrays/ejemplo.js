console.log("Hola, ya sé programar en Node.js");

let dias=["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];

console.log(dias[0]); //lunes
console.log(dias.length); //7
console.log(dias.length-1); //domingo
console.log(dias[7]); //undefined
//Luego agregar elemento 7
dias[7]="otro";
console.log(dias[7]);
dias[20]="veinte";
console.log(dias[20]);
console.log(dias[19]); //undefined
console.log(dias.length); //21

//Tradicional
for (let i=0;i<dias.length;i++){
    console.log(`DIA:${dias[i]}`);
}

//Con foreach
/*dias.array.forEach(element => {
    dias.forEach(function d) {
        console.log(d).toLowerCase();
    }
}*/


let nombres = Array("Pedro","Anna","Arturo","Pepito");
nombres.push("Nia");

nombres.forEach((nombre) => console.log(nombre.toUpperCase()));

console.log(nombres);

let nombrescuatro = nombres.filter(cadanombre => cadanombre.length >4);
console.log(nombrescuatro);

let nombrescuatroyletraA = nombres.filter(cadanombre => cadanombre.length >4).filter(cadanombreA => cadanombreA.toUpperCase().includes("A"));
console.log(nombrescuatroyletraA);

let nombrescuatroyletraA2 = nombres.filter((cadanombre) => cadanombre.length >4 && cadanombre.toUpperCase().includes("A"));
console.log(nombrescuatroyletraA2);

let kk="Aeiou"
console.log(kk.toUpperCase());

//map
let transformado = nombres.map((nombre) => "algo");
console.log(transformado);

let transformado2 = nombres.map((nombre) => nombre.toUpperCase());
console.log(transformado2);

//Obtener una copia del array sustituyendo a por @.
let arroba = nombres.map((nombre) => nombre.replaceAll('a','@'));
console.log(arroba);

//Cambiar n por N y obtener nombres < 5 caracteres.
let nombresN4 = nombres.map((nombre1) => nombre1.replaceAll('n','N')).filter((nombre2) => nombre2.length < 5);
console.log(nombresN4);

//Mejor es filtrar primero y luego transformar.
let nombresN5 = nombres.filter(nombre => nombre.length < 5).map(nombre => nombre.replaceAll('n','N'));
console.log(nombresN5);

let elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

//find
let findEle = elementos.find(numero => numero > 10);
console.log(findEle);

//sort --> Ordena de menor a mayor.
let eleDesorden = Array(87,34,12,876,56,666,6,1);
let sortElementos = eleDesorden.sort();
console.log(sortElementos);

//some --> Ve si hay elementos que cumple una condición. Devuelve true o false.
let hayNombresLargos = nombres.some(nombre => nombre.length>10);
console.log(hayNombresLargos);