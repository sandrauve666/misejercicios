let cliente1 = {
    nombre : "Sandra",
    direccion : "Calle Melancolía",
    telefono : "612345678"
}

console.log(cliente1);
console.log(typeof cliente1);

let factura1 = new Object();
factura1.numero = 1;
factura1.emisor = "Empresa emisora";
//factura1.cliente = "Nombre de cliente";
factura1.cliente = cliente1;
factura1.importe = 300;

console.log(factura1);
console.log(typeof factura1);