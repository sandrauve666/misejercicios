/*let edad: number;
{
    let nombre: string;
}*/
let edad: number = 40;
let nombre: string = "Fernando";
function sumar(n1: number, n2: number): number {
    return n1 + n2;
}
let x;
console.log(typeof x);

class Factura {
    numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }
}
let f1 = new Factura(1000);