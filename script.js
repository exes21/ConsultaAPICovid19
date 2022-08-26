window.onload = iniciar();

function iniciar() {
    let btnBuscar = document.getElementById("btnBuscarDatos");
    btnBuscar.addEventListener("click", clicKBoton);
}

async function cargarURL(url) {
    let response = await fetch(url);
    return response.json();
}

async function clicKBoton() {
    let json = await cargarURL("https://api.covidtracking.com/v1/us/daily.json");
    let Inputfecha = document.getElementById("inputFecha").value;
    let stringFecha = Inputfecha.slice(0, 4) + Inputfecha.slice(5, 7) + Inputfecha.slice(8, 10);
    let positivos = document.getElementById("positivos");
    let negativos = document.getElementById("negativos");
    let hospitalizados = document.getElementById("hospitalizados");

    if (stringFecha > json[length].date || stringFecha < json[0].date) {
        alert("No contamos con datos de esa fecha, la última actualización de datos fue el 07 de marzo del 2021" +
            "el primer dato registrado fue el 13 de enero del 2020");
    }
    else {
        for (let i = 0; i < json.length; i++) {
            if (json[i].date == stringFecha) {
                positivos.innerText = json[i].positive;
                negativos.innerText = json[i].negative;
                hospitalizados.innerText = json[i].hospitalized;
            }
        }
    }
}