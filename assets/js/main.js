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


// Proceso de voto
let part_selec = "";
let voto_selec = 1;

let resultados = 0;

let julieta = 0;
let coti = 0;
let daniela = 0;
let romina = 0;

function votoselec(cantidad) {
    voto_selec = cantidad;

    console.log(`Seleccionaste ${voto_selec} votos`)
}


function votar() {

    if (part_selec == "julieta") {
        julieta = julieta + voto_selec
        nombre = julieta
    } else if (part_selec == "coti") {
        coti = coti + voto_selec
        nombre = coti
    } else if (part_selec == "daniela") {
        daniela = daniela + voto_selec
        nombre = daniela
    } else if (part_selec == "romina") {
        romina = romina + voto_selec
        nombre = romina
    }

    console.log(`Voto registrado a ${part_selec}, ahora tiene ${nombre} votos.`)

    setTimeout(function () {
        Swal.fire({
            title: 'Voto registrado!',
            html: `Votaste a ${part_selec}, y le diste ${voto_selec} votos.`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        })
    }, 0250)

}

//Función para ver el eliminado con más votos

function verResultados() {

    let verificar = prompt("¿Deseas ver los resultados? Se cerrará la votación. [Y/n]").toUpperCase();

    if (verificar != "Y") return alert("Cancelaste la operación.");

    let total = julieta + coti + daniela + romina
    let sobra = 0;

    let porcentaje_julieta = (julieta * 100) / total;
    porcentaje_julieta = porcentaje_julieta.toString();
    porcentaje_julieta = porcentaje_julieta.slice(0, 5);

    if (porcentaje_julieta < 10.00) {
        porcentaje_julieta = porcentaje_julieta.slice(0, 4);

        porcentaje_julieta = Number(porcentaje_julieta);
        if ((porcentaje_julieta.toString()).slice(-1) >= 5) {
            sobra = 10 - Number((porcentaje_julieta.toString()).slice(-1))
            sobra = sobra.toString();
            sobra = "0." + sobra
            sobra = Number(sobra)
            porcentaje_julieta = porcentaje_julieta + sobra;
        }
    }

    porcentaje_julieta = Number(porcentaje_julieta);
    if ((porcentaje_julieta.toString()).slice(-1) >= 5 && (porcentaje_julieta.toString()).length >= 5) {
        sobra = 10 - Number((porcentaje_julieta.toString()).slice(-1))
        sobra = sobra.toString();
        sobra = "0.0" + sobra
        sobra = Number(sobra)
        porcentaje_julieta = porcentaje_julieta + sobra;
    }


    let porcentaje_coti = (coti * 100) / total;
    porcentaje_coti = porcentaje_coti.toString();
    porcentaje_coti = porcentaje_coti.slice(0, 5);

    if (porcentaje_coti < 10.00) {
        porcentaje_coti = porcentaje_coti.slice(0, 4);

        porcentaje_coti = Number(porcentaje_coti);
        if ((porcentaje_coti.toString()).slice(-1) >= 5) {
            sobra = 10 - Number((porcentaje_coti.toString()).slice(-1))
            sobra = sobra.toString();
            sobra = "0." + sobra
            sobra = Number(sobra)
            porcentaje_coti = porcentaje_coti + sobra;
        }
    }

    porcentaje_coti = Number(porcentaje_coti);
    if ((porcentaje_coti.toString()).slice(-1) >= 5 && (porcentaje_coti.toString()).length >= 5) {
        sobra = 10 - Number((porcentaje_coti.toString()).slice(-1))
        sobra = sobra.toString();
        sobra = "0.0" + sobra
        sobra = Number(sobra)
        porcentaje_coti = porcentaje_coti + sobra;
    }

    let porcentaje_daniela = (daniela * 100) / total;
    porcentaje_daniela = porcentaje_daniela.toString();
    porcentaje_daniela = porcentaje_daniela.slice(0, 5);

    if (porcentaje_daniela < 10.00) {
        porcentaje_daniela = porcentaje_daniela.slice(0, 4);

        porcentaje_daniela = Number(porcentaje_daniela);
        if ((porcentaje_daniela.toString()).slice(-1) >= 5) {
            sobra = 10 - Number((porcentaje_daniela.toString()).slice(-1))
            sobra = sobra.toString();
            sobra = "0." + sobra
            sobra = Number(sobra)
            porcentaje_daniela = porcentaje_daniela + sobra;
        }
    }

    porcentaje_daniela = Number(porcentaje_daniela);
    if ((porcentaje_daniela.toString()).slice(-1) >= 5 && (porcentaje_daniela.toString()).length >= 5) {
        sobra = 10 - Number((porcentaje_daniela.toString()).slice(-1))
        sobra = sobra.toString();
        sobra = "0.0" + sobra
        sobra = Number(sobra)
        porcentaje_daniela = porcentaje_daniela + sobra;
    }

    let porcentaje_romina = (romina * 100) / total;
    porcentaje_romina = porcentaje_romina.toString();
    porcentaje_romina = porcentaje_romina.slice(0, 5);

    if (porcentaje_romina < 10.00) {
        porcentaje_romina = porcentaje_romina.slice(0, 4);

        porcentaje_romina = Number(porcentaje_romina);
        if ((porcentaje_romina.toString()).slice(-1) >= 5) {
            sobra = 10 - Number((porcentaje_romina.toString()).slice(-1))
            sobra = sobra.toString();
            sobra = "0." + sobra
            sobra = Number(sobra)
            porcentaje_romina = porcentaje_romina + sobra;
        }
    }

    porcentaje_romina = Number(porcentaje_romina);
    if ((porcentaje_romina.toString()).slice(-1) >= 5 && (porcentaje_romina.toString()).length >= 5) {
        sobra = 10 - Number((porcentaje_romina.toString()).slice(-1))
        sobra = sobra.toString();
        sobra = "0.0" + sobra
        sobra = Number(sobra)
        porcentaje_romina = porcentaje_romina + sobra;
    }

    let votación = [julieta, coti, daniela, romina]
    votación = votación.sort(function (a, b) { return b - a }); // --> 23, 12, 3







    if (votación[0] == 0) {
        return alert("Error: No se registraron votos aún.")
    }

    if (votación[0] == votación[1]) {
        return alert("Suceso inédito: Empate entre dos participantes. Se recomienda dejar la votación abierta unos instantes.")

    }

    let sale = votación[0];

    //Acá según el participante eliminado, se le cambia algunas propiedades a tu .card y se ocultan las demás.

    if (sale == julieta) {
        document.getElementById("julieta").innerHTML = "ELIMINADA";
        document.getElementById("julieta").style.fontFamily = "Parsi-Bold";
        document.getElementById("card-julieta").style.filter = "grayscale(45%)";
        document.getElementById("julieta").style.marginLeft = "15%";
        document.getElementById("julieta").style.marginTop = "50%";
        document.getElementById("julieta").style.fontSize = "30px";

        document.getElementById("card-coti").style.display = "none";
        document.getElementById("card-daniela").style.display = "none";
        document.getElementById("card-romina").style.display = "none";

        document.getElementById("card-julieta").classList.remove("me-3");
        document.getElementById("quien").innerHTML = "JULIETA POGGIO HA SIDO ELIMINADA";
    } else if (sale == coti) {
        document.getElementById("coti").innerHTML = "ELIMINADA";
        document.getElementById("coti").style.fontFamily = "Parsi-Bold";
        document.getElementById("card-coti").style.filter = "grayscale(45%)";
        document.getElementById("coti").style.marginLeft = "15%";
        document.getElementById("coti").style.marginTop = "50%";
        document.getElementById("coti").style.fontSize = "30px";

        document.getElementById("card-julieta").style.display = "none";
        document.getElementById("card-daniela").style.display = "none";
        document.getElementById("card-romina").style.display = "none";

        document.getElementById("card-coti").classList.remove("me-3");
        document.getElementById("quien").innerHTML = "CONSTANZA ROMERO HA SIDO ELIMINADA";

    } else if (sale == daniela) {
        document.getElementById("daniela").innerHTML = "ELIMINADA";
        document.getElementById("daniela").style.fontFamily = "Parsi-Bold";
        document.getElementById("card-daniela").style.filter = "grayscale(45%)";
        document.getElementById("daniela").style.marginLeft = "15%";
        document.getElementById("daniela").style.marginTop = "50%";
        document.getElementById("daniela").style.fontSize = "30px";

        document.getElementById("card-julieta").style.display = "none";
        document.getElementById("card-coti").style.display = "none";
        document.getElementById("card-romina").style.display = "none";

        document.getElementById("card-daniela").classList.remove("me-3");
        document.getElementById("quien").innerHTML = "DANIELA CELIS HA SIDO ELIMINADA";
    } else if (sale == romina) {
        document.getElementById("romina").innerHTML = "ELIMINADA";
        document.getElementById("romina").style.fontFamily = "Parsi-Bold";
        document.getElementById("card-romina").style.filter = "grayscale(45%)";
        document.getElementById("romina").style.marginLeft = "15%";
        document.getElementById("romina").style.marginTop = "50%";
        document.getElementById("romina").style.fontSize = "30px";

        document.getElementById("card-julieta").style.display = "none";
        document.getElementById("card-coti").style.display = "none";
        document.getElementById("card-daniela").style.display = "none";

        document.getElementById("quien").innerHTML = "ROMINA UHRIG HA SIDO ELIMINADA";
    }

    document.getElementById("verResultados").style.display = "none";
    document.getElementById("verEscribana").style.display = "block";

    document.getElementById("verEscribana").href = `./escribana.html?votosjulieta=${porcentaje_julieta}&votoscoti=${porcentaje_coti}&votosdaniela=${porcentaje_daniela}&votosromina=${porcentaje_romina}`

    resultados = 1;

    console.log(`RESULTADOS: Julieta (${porcentaje_julieta}%), Coti (${porcentaje_coti}%), Daniela (${porcentaje_daniela}%), Romina (${porcentaje_romina}%)`)

}

//Cambia el título del modal según el participante elegido a votar

function modal(participante) {

    if (resultados != 0) {
        return
    }

    part_selec = participante;

    console.log("Seleccionaste a " + part_selec)

    document.getElementById("modal-btn-title").innerHTML = "VOTAR A " + participante.toUpperCase();
    document.getElementById("modal-btn-votar").innerHTML = "VOTAR A " + participante.toUpperCase();
}

//Toma los parámetros de la URL y los ingresa como variables, para ser mostrados como porcentajes.

function mostrar_escribana() {

    // Resuelva la URL para obtener el valor de los votos de cada participante.
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    let votosjulieta = getParameterByName('votosjulieta');
    let votoscoti = getParameterByName('votoscoti');
    let votosdaniela = getParameterByName('votosdaniela');
    let votosromina = getParameterByName('votosromina');


    //Revisa si por alguna razón, el número es más largo de lo esperado
    if (votosjulieta.length > 5) {
        votosjulieta = Math.trunc(votosjulieta);

    }

    if (votoscoti.length > 5) {
        votoscoti = Math.trunc(votoscoti);

    }

    if (votosdaniela.length > 5) {
        votosdaniela = Math.trunc(votosdaniela);

    }

    if (votosromina.length > 5) {
        votosromina = Math.trunc(votosromina);

    }

    document.getElementById("votosjulieta").innerHTML = + votosjulieta + "%";
    document.getElementById("votoscoti").innerHTML = + votoscoti + "%";
    document.getElementById("votosdaniela").innerHTML = + votosdaniela + "%";
    document.getElementById("votosromina").innerHTML = + votosromina + "%";

    //Ordena de MAYOR porcentaje A MENOR porcentaje. [CICLO]

    let orden = [votosjulieta, votoscoti, votosdaniela, votosromina]
    orden = orden.sort(function (a, b) { return b - a }); // --> 23, 12, 3

    let participants = ['julieta', 'coti', 'daniela', 'romina'];
    let votes = [votosjulieta, votoscoti, votosdaniela, votosromina];

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