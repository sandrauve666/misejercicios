function procesarCampings(texto){
    let objetoServidor=JSON.parse(texto);
    console.log(objetoServidor.address);
    arrayCampings = objetoServidor;
}

function procesarError(err){
    console.error(err);
}