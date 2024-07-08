function comprobarSensores()
{
    if (comprobarSensor1() & comprobarSensor2()) //Se evalúan las 2 partes de la expresión.
    {
        alert("todo ok");
    }
    else
    {
        alert("Hay error");
    }
}
function comprobarSensor1()
{
    let valorSensor1 = document.getElementById("sensor1").value;
    //return !(valorSensor1<10); //Opción 1 --> valorSensor<10, si devuelve falso, el ! lo pasa a true y devuelve true.
    let sensorOK;
    if (valorSensor1 < 10)
    {
        sensorOK = false;
        document.querySelector("#marcador1").classList.add("rojo");
    }
    else
    {
        sensorOK = true;
        document.querySelector("#marcador2").classList.add("verde");
    }
    return sensorOK;
}

function comprobarSensor2()
{
    let valorSensor2 = document.getElementById("sensor2").value;
    //let sensorOK = valorSensor2<10 ? false : true;
    if (valorSensor2 < 10)
        {
            sensorOK = false;
            document.querySelector("#marcador2").classList.add("rojo");
        }
        else
        {
            sensorOK = true;
            document.querySelector("#marcador2").classList.add("verde");
        }
        return sensorOK;
}