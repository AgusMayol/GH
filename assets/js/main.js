//Fecha que se muestra en index y escribana
function fecha() {
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let fecha = "";

    if (month < 10) {

        if (day < 10) {
            fecha = `0${day}/0${month}/${year}`;
        } else {
            fecha = `${day}/0${month}/${year}`;
        }
    } else {
        fecha = `${day}/${month}/${year}`;
    }

    console.log("Hoy es: " + fecha)
    document.getElementById("fecha").innerHTML = fecha;
}

let participantes = [{ id: "julieta", nombre: "JULIETA POGGIO", votos: 0, porcentaje: 0 }, { id: "coti", nombre: "CONSTANZA ROMERO", votos: 0, porcentaje: 0 }, { id: "daniela", nombre: "DANIELA CELIS", votos: 0, porcentaje: 0 }, { id: "romina", nombre: "ROMINA UHRIG", votos: 0, porcentaje: 0 }]


// Proceso de voto
let eliminado = "";
let resto = "";
let eliminados = "";
let restos = "";
let part_selec = "";
let voto_selec = 1;

let resultados = 0;

let julieta = 0;
let coti = 0;
let daniela = 0;
let romina = 0;

function cargarVotos() {
    let votos = localStorage.getItem('resultados');
    votos = JSON.parse(votos);

    if (votos == undefined) return;

    let votacións = [votos[0].votos, votos[1].votos, votos[2].votos, votos[3].votos]
    votacións = votacións.sort(function (a, b) { return b - a }); // --> 23, 12, 3


    for (let i = 0; i < votacións.length; i++) {

        if (votacións[0] == votos[i].votos) {
            eliminados = votos[i];
            restos = votos.filter(participanteRs => participanteRs != votos[i]);
        } else {
            continue;
        }

        if (votos[i].votos == votacións[0]) {
            document.getElementById(eliminados.id).innerHTML = "ELIMINADA";
            document.getElementById(eliminados.id).style.fontFamily = "Parsi-Bold";
            document.getElementById("card-" + eliminados.id).style.filter = "grayscale(45%)";
            document.getElementById(eliminados.id).style.marginLeft = "15%";
            document.getElementById(eliminados.id).style.marginTop = "50%";
            document.getElementById(eliminados.id).style.fontSize = "30px";

            document.getElementById("card-" + restos[0].id).style.display = "none";
            document.getElementById("card-" + restos[1].id).style.display = "none";
            document.getElementById("card-" + restos[2].id).style.display = "none";

            document.getElementById("card-" + eliminados.id).classList.remove("me-3");
            document.getElementById("quien").innerHTML = eliminados.nombre + " HA SIDO ELIMINADA";

            document.getElementById("card-" + eliminados.id).style.pointerEvents = "none";
        }
    }

    document.getElementById("verResultados").style.display = "none";
    document.getElementById("verEscribana").style.display = "block";

    resultados = 1;
}

function votoselec(cantidad) {
    voto_selec = cantidad;

    console.log(`Seleccionaste ${voto_selec} votos`)
}


function votar() {

    participantes[part_selec].votos += voto_selec;

    console.log(`Voto registrado a ${participantes[part_selec].id}, ahora tiene ${participantes[part_selec].votos} votos.`)

    setTimeout(function () {
        Swal.fire({
            title: 'Voto registrado!',
            html: `Votaste a ${participantes[part_selec].id}, y le diste ${voto_selec} votos.`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        })
    }, 0250)

}

//Función para ver el eliminado con más votos

function verResultados() {

    let total = participantes[0].votos + participantes[1].votos + participantes[2].votos + participantes[3].votos;
    let sobra = 0;

    let votación = [participantes[0].votos, participantes[1].votos, participantes[2].votos, participantes[3].votos]
    votación = votación.sort(function (a, b) { return b - a }); // --> 23, 12, 3

    if (votación[0] == 0) {
        return alert("Error: No se registraron votos aún.")
    }

    if (votación[0] == votación[1]) {
        return alert("Suceso inédito: Empate entre dos participantes. Se recomienda dejar la votación abierta unos instantes.")
    }

    //Acá según el participante eliminado, se le cambia algunas propiedades a tu .card y se ocultan las demás.

    for (let i = 0; i < votación.length; i++) {

        participantes[i].porcentaje = (participantes[i].votos * 100) / total;
        participantes[i].porcentaje = participantes[i].porcentaje.toString();
        participantes[i].porcentaje = participantes[i].porcentaje.slice(0, 5);

        if (participantes[i].porcentaje < 10.00) {
            participantes[i].porcentaje = participantes[i].porcentaje.slice(0, 4);

            participantes[i].porcentaje = Number(participantes[i].porcentaje);
            if ((participantes[i].porcentaje.toString()).slice(-1) >= 5) {
                sobra = 10 - Number((participantes[i].porcentaje.toString()).slice(-1))
                sobra = sobra.toString();
                sobra = "0." + sobra
                sobra = Number(sobra)
                participantes[i].porcentaje = participantes[i].porcentaje + sobra;
            }
        }

        if (votación[0] == participantes[i].votos) {
            eliminado = participantes[i];
            resto = participantes.filter(participanteR => participanteR != participantes[i]);
        } else {
            continue;
        }

        if (participantes[i].votos == votación[0]) {
            document.getElementById(eliminado.id).innerHTML = "ELIMINADA";
            document.getElementById(eliminado.id).style.fontFamily = "Parsi-Bold";
            document.getElementById("card-" + eliminado.id).style.filter = "grayscale(45%)";
            document.getElementById(eliminado.id).style.marginLeft = "15%";
            document.getElementById(eliminado.id).style.marginTop = "50%";
            document.getElementById(eliminado.id).style.fontSize = "30px";

            document.getElementById("card-" + resto[0].id).style.display = "none";
            document.getElementById("card-" + resto[1].id).style.display = "none";
            document.getElementById("card-" + resto[2].id).style.display = "none";

            document.getElementById("card-" + eliminado.id).classList.remove("me-3");
            document.getElementById("card-" + eliminado.id).style.pointerEvents = "none";
            document.getElementById("quien").innerHTML = eliminado.nombre + " HA SIDO ELIMINADA";
        }

    }

    document.getElementById("verResultados").style.display = "none";
    document.getElementById("verEscribana").style.display = "block";
    localStorage.setItem('resultados', JSON.stringify(participantes));
    // [ {id: '${participantes[0].id}', porcentaje: ${participantes[0].porcentaje}}, {id: ${participantes[1].id}, porcentaje: ${participantes[1].porcentaje}}, {id: ${participantes[2].id}, porcentaje: ${participantes[2].porcentaje}}, {id: ${participantes[3].id}, porcentaje: ${participantes[3].porcentaje}} ]

    resultados = 1;

    console.log(`RESULTADOS: ${participantes[0].id} (${participantes[0].porcentaje}%), ${participantes[1].id} (${participantes[1].porcentaje}%), ${participantes[2].id} (${participantes[2].porcentaje}%), ${participantes[3].id} (${participantes[3].porcentaje}%)`)

}

//Cambia el título del modal según el participante elegido a votar

function modal(participante) {

    const myModal = document.getElementById('exampleModal')
    const backdrop = document.getElementsByClassName('modal-backdrop fade show')

    if (resultados != 0) {
        myModal.addEventListener('shown.bs.modal', () => {
            myModal.remove();
            backdrop[0].remove();
        })
    }

    part_selec = participante;

    console.log("Seleccionaste a " + participantes[part_selec].nombre)

    document.getElementById("modal-btn-title").innerHTML = "VOTAR A " + participantes[part_selec].nombre;
    document.getElementById("modal-btn-votar").innerHTML = "VOTAR A " + participantes[part_selec].nombre;
}

//Toma los parámetros de la URL y los ingresa como variables, para ser mostrados como porcentajes.

function mostrar_escribana() {

    let votos = localStorage.getItem('resultados');
    votos = JSON.parse(votos);

    for (let i = 0; i < votos.length; i++) {

        if (votos[i].porcentaje.length > 5) {
            votos[i].porcentaje = Math.trunc(votos[i].porcentaje);
        }

        document.getElementById("votos" + votos[i].id).innerHTML = votos[i].porcentaje + "%";

    }

    //Ordena de MAYOR porcentaje A MENOR porcentaje. [CICLO]

    let orden = [votos[0].porcentaje, votos[1].porcentaje, votos[2].porcentaje, votos[3].porcentaje]
    orden = orden.sort(function (a, b) { return b - a }); // --> 23, 12, 3

    let participants = ['julieta', 'coti', 'daniela', 'romina'];
    let votes = [votos[0].porcentaje, votos[1].porcentaje, votos[2].porcentaje, votos[3].porcentaje];

    for (let i = 0; i < participants.length; i++) {
        if (votes[i] === orden[0]) {
            document.getElementById(`card-${participants[i]}`).style.order = "1";
            console.log(participants[i] + ": " + votes[i] + "%")
        } else if (votes[i] === orden[1]) {
            document.getElementById(`card-${participants[i]}`).style.order = "2";
            console.log(participants[i] + ": " + votes[i] + "%")
        } else if (votes[i] === orden[2]) {
            document.getElementById(`card-${participants[i]}`).style.order = "3";
            console.log(participants[i] + ": " + votes[i] + "%")
        } else {
            document.getElementById(`card-${participants[i]}`).style.order = "4";
            console.log(participants[i] + ": " + votes[i] + "%")
        }

    }

}

function participantesS() {
    let votos = localStorage.getItem('resultados');
    votos = JSON.parse(votos);

    if (votos == undefined) return;

    let orden = [votos[0].porcentaje, votos[1].porcentaje, votos[2].porcentaje, votos[3].porcentaje]
    orden = orden.sort(function (a, b) { return b - a }); // --> 23, 12, 3

    let participants = ['julieta', 'coti', 'daniela', 'romina'];
    let votes = [votos[0].porcentaje, votos[1].porcentaje, votos[2].porcentaje, votos[3].porcentaje];

    for (let i = 0; i < participants.length; i++) {
        if (votes[i] === orden[0]) {

            document.getElementById(participantes[i].id).innerHTML = "ELIMINADA";
            document.getElementById(participantes[i].id).style.fontFamily = "Parsi-Bold";
            document.getElementById("card-" + participantes[i].id).style.filter = "grayscale(45%)";
            document.getElementById(participantes[i].id).style.marginLeft = "15%";
            document.getElementById(participantes[i].id).style.marginTop = "50%";
            document.getElementById(participantes[i].id).style.fontSize = "30px";

        }

    }
}

function limpiarStorage() {
    localStorage.removeItem('resultados');

    console.log("Se han borrado los resultados almacenados localmente.")

    setTimeout(function () {
        Swal.fire({
            title: 'Limpieza de almacenamiento',
            html: `Eliminando los resultados de votaciones anteriores. . .`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        })
    }, 0250)

    setTimeout(function () {
        location.reload();
    }, 2300)
}