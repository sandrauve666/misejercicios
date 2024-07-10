let a1 = ["do", "re", "mi", "fa"];
let a2 = ["sol", "la", "si", "do"];

let a3 = a1.concat(a2);
console.log(a3);

console.log(a3.includes("do"));
console.log(a3.includes("kk"));

let a4 = a1.join(a2);
console.log(a4);
let a5 = a1.join("--");
console.log(a5);

//reduce
let numeros = [3, 8, 1];

let resultado = numeros.reduce((n1,n2)=>n1+n2);
console.log(resultado);