const alumnos = new Map([
    ["Alberto", 38],
    ["Oscar", 40],
    ["Lara", 29]
]);

console.log(alumnos.get("Oscar"));

class pelicula
{
    constructor(director, genero, año, duracion)
    {
        this.director = director;
        this.genero = genero;
        this.año = año;
        this.duracion = duracion;
    }
}

let peli1

let peli = new Map([
    ["Titanic", new pelicula("James Cameron", "Drama", 1997, "3h14m")],
    ["Barbie", new pelicula("Greta Gerwig", "Comedia", 2023, "1h54m")],
    ["Oppenheimer", new pelicula("Christopher Nolan", "Drama", 2023, "3h")]
]);

console.log(peli.get("Titanic").director);
console.log(peli.get("Barbie").genero);
console.log(peli.get("Oppenheimer").duracion);

let facturar = ()=>{
    console.log("Facturando....");
}

let reclamar = ()=>{
    console.log("Reclamando....");
}

function archivar(){
    console.log("Archivar....");
}

let flujoTrabajo = new Map([
    ["Facturar", facturar],
    ["Reclamar", reclamar],
    ["Archivar", archivar]
])