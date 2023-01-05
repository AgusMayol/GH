function fecha() {
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let fecha = "";
    
    if(month < 10){
      fecha = `${day}/0${month}/${year}`;
    }else{
      fecha = `${day}/${month}/${year}`;
    }
    
    document.getElementById("fecha").innerHTML = fecha;
}

console.log("Qué mirá' bobo?")
console.log("Andá pa' allá 🇦🇷")


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


    console.log(part_selec)

    if(part_selec == "julieta") {
        julieta = julieta+voto_selec
        nombre = julieta
    } else if(part_selec == "coti") {
        coti = coti+voto_selec
        nombre = coti
    } else if(part_selec == "daniela") {
        daniela = daniela+voto_selec
        nombre = daniela
    } else if(part_selec == "romina") {
        romina = romina+voto_selec
        nombre = romina
    }

    console.log(`Voto registrado a ${part_selec}, ahora tiene ${nombre} votos.`)

    setTimeout(function (){
        Swal.fire({
            title: 'Voto registrado!',
            html: `Votaste a ${part_selec}, y le diste ${voto_selec} votos.`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        })
    }, 0250)

}

function verResultados(){

    let total = julieta + coti + daniela + romina
    let sobra = 0;

    let porcentaje_julieta = (julieta*100)/total;
    porcentaje_julieta = porcentaje_julieta.toString();
    porcentaje_julieta = porcentaje_julieta.slice(0, 5);

    if(porcentaje_julieta < 10.00){
        porcentaje_julieta = porcentaje_julieta.slice(0, 4);

        porcentaje_julieta = Number(porcentaje_julieta);
        if((porcentaje_julieta.toString()).slice(-1) >= 5){
            sobra = 10 - Number((porcentaje_julieta.toString()).slice(-1))
            sobra = sobra.toString();
            sobra = "0." + sobra
            sobra = Number(sobra)
            porcentaje_julieta = porcentaje_julieta + sobra;
        }
    }

    porcentaje_julieta = Number(porcentaje_julieta);
    if((porcentaje_julieta.toString()).slice(-1) >= 5 && (porcentaje_julieta.toString()).length >= 5){
        sobra = 10 - Number((porcentaje_julieta.toString()).slice(-1))
        sobra = sobra.toString();
        sobra = "0.0" + sobra
        sobra = Number(sobra)
        porcentaje_julieta = porcentaje_julieta + sobra;
    }


    let porcentaje_coti = (coti*100)/total;
    porcentaje_coti = porcentaje_coti.toString();
    porcentaje_coti = porcentaje_coti.slice(0, 5);

    if(porcentaje_coti < 10.00){
        porcentaje_coti = porcentaje_coti.slice(0, 4);

        porcentaje_coti = Number(porcentaje_coti);
        if((porcentaje_coti.toString()).slice(-1) >= 5){
            sobra = 10 - Number((porcentaje_coti.toString()).slice(-1))
            sobra = sobra.toString();
            sobra = "0." + sobra
            sobra = Number(sobra)
            porcentaje_coti = porcentaje_coti + sobra;
        }
    }

    porcentaje_coti = Number(porcentaje_coti);
    if((porcentaje_coti.toString()).slice(-1) >= 5 && (porcentaje_coti.toString()).length >= 5){
        sobra = 10 - Number((porcentaje_coti.toString()).slice(-1))
        sobra = sobra.toString();
        sobra = "0.0" + sobra
        sobra = Number(sobra)
        porcentaje_coti = porcentaje_coti + sobra;
    }

    let porcentaje_daniela = (daniela*100)/total;
    porcentaje_daniela = porcentaje_daniela.toString();
    porcentaje_daniela = porcentaje_daniela.slice(0, 5);

    if(porcentaje_daniela < 10.00){
        porcentaje_daniela = porcentaje_daniela.slice(0, 4);

        porcentaje_daniela = Number(porcentaje_daniela);
        if((porcentaje_daniela.toString()).slice(-1) >= 5){
            sobra = 10 - Number((porcentaje_daniela.toString()).slice(-1))
            sobra = sobra.toString();
            sobra = "0." + sobra
            sobra = Number(sobra)
            porcentaje_daniela = porcentaje_daniela + sobra;
        }
    }

    porcentaje_daniela = Number(porcentaje_daniela);
    if((porcentaje_daniela.toString()).slice(-1) >= 5 && (porcentaje_daniela.toString()).length >= 5){
        sobra = 10 - Number((porcentaje_daniela.toString()).slice(-1))
        sobra = sobra.toString();
        sobra = "0.0" + sobra
        sobra = Number(sobra)
        porcentaje_daniela = porcentaje_daniela + sobra;
    }

    let porcentaje_romina = (romina*100)/total;
    porcentaje_romina = porcentaje_romina.toString();
    porcentaje_romina = porcentaje_romina.slice(0, 5);

    if(porcentaje_romina < 10.00){
        porcentaje_romina = porcentaje_romina.slice(0, 4);

        porcentaje_romina = Number(porcentaje_romina);
        if((porcentaje_romina.toString()).slice(-1) >= 5){
            sobra = 10 - Number((porcentaje_romina.toString()).slice(-1))
            sobra = sobra.toString();
            sobra = "0." + sobra
            sobra = Number(sobra)
            porcentaje_romina = porcentaje_romina + sobra;
        }
    }

    porcentaje_romina = Number(porcentaje_romina);
    if((porcentaje_romina.toString()).slice(-1) >= 5 && (porcentaje_romina.toString()).length >= 5){
        sobra = 10 - Number((porcentaje_romina.toString()).slice(-1))
        sobra = sobra.toString();
        sobra = "0.0" + sobra
        sobra = Number(sobra)
        porcentaje_romina = porcentaje_romina + sobra;
    }

    let votación = [julieta, coti, daniela, romina]
    votación = votación.sort(function(a, b){return b - a}); // --> 23, 12, 3
    
    
    
    
    
    

    if(votación[0] == 0) {
        return alert("Error: No se registraron votos aún.")
    }

    if(votación[0] == votación[1]) {
        document.getElementById("verEscribana").href = `./escribana.html?votosjulieta=${porcentaje_julieta}&votoscoti=${porcentaje_coti}&votosdaniela=${porcentaje_daniela}&votosromina=${porcentaje_romina}`
        document.getElementById("verEscribana").style.display = "block";
        return alert("Suceso inédito: Empate entre dos participantes. Se recomienda pedir escribana.")
        
    }

    let sale = votación[0];

    if(sale == julieta) {
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

}

function modal(participante) {

    if(resultados != 0) {
        return
    }

    part_selec = participante;

    document.getElementById("modal-btn-title").innerHTML = "VOTAR A " + participante.toUpperCase();
    document.getElementById("modal-btn-votar").innerHTML = "VOTAR A " + participante.toUpperCase();
}

function mostrar_escribana() {
/**
 * @param String name
 * @return String
 */
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

document.getElementById("votosjulieta").innerHTML =  + votosjulieta + "%";
document.getElementById("votoscoti").innerHTML =  + votoscoti + "%";
document.getElementById("votosdaniela").innerHTML =  + votosdaniela + "%";
document.getElementById("votosromina").innerHTML =  + votosromina + "%";

let orden = [votosjulieta, votoscoti, votosdaniela, votosromina]
    orden = orden.sort(function(a, b){return b - a}); // --> 23, 12, 3

    if(orden[0] == votosjulieta) {
        document.getElementById("card-julieta").style.order = "1";

        if(orden[1] == votoscoti) {
            document.getElementById("card-coti").style.order = "2";

            if(orden[2] == votosdaniela) {
                document.getElementById("card-daniela").style.order = "3";
                document.getElementById("card-romina").style.order = "4";
                document.getElementById("card-romina").classList.remove("me-5");
            } else {
                    document.getElementById("card-romina").style.order = "3";
                    document.getElementById("card-daniela").style.order = "4";
                    document.getElementById("card-daniela").classList.remove("me-5");
            }

        } else if(orden[1] == votosdaniela) {
                document.getElementById("card-daniela").style.order = "2";

                if(orden[2] == votoscoti) {
                    document.getElementById("card-coti").style.order = "3";
                    document.getElementById("card-romina").style.order = "4";
                    document.getElementById("card-romina").classList.remove("me-5");
                } else {
                        document.getElementById("card-romina").style.order = "3";
                        document.getElementById("card-coti").style.order = "4";
                        document.getElementById("card-coti").classList.remove("me-5");
                }

        }else if(orden[1] == votosromina) {
            document.getElementById("card-romina").style.order = "2";

            if(orden[2] == votosdaniela) {
                document.getElementById("card-daniela").style.order = "3";
                document.getElementById("card-coti").style.order = "4";
                document.getElementById("card-coti").classList.remove("me-5");
            } else {
                    document.getElementById("card-coti").style.order = "3";
                    document.getElementById("card-daniela").style.order = "4";
                    document.getElementById("card-daniela").classList.remove("me-5");
            }
        }  
    } else if(orden[0] == votoscoti) {
        document.getElementById("card-coti").style.order = "1";

        if(orden[1] == votosjulieta) {
            document.getElementById("card-julieta").style.order = "2";

            if(orden[2] == votosdaniela) {
                document.getElementById("card-daniela").style.order = "3";
                document.getElementById("card-romina").style.order = "4";
                document.getElementById("card-romina").classList.remove("me-5");
            } else {
                    document.getElementById("card-romina").style.order = "3";
                    document.getElementById("card-daniela").style.order = "4";
                    document.getElementById("card-daniela").classList.remove("me-5");
            }

        } else if(orden[1] == votosdaniela) {
                document.getElementById("card-daniela").style.order = "2";

                if(orden[2] == votosjulieta) {
                    document.getElementById("card-julieta").style.order = "3";
                    document.getElementById("card-romina").style.order = "4";
                    document.getElementById("card-romina").classList.remove("me-5");
                } else {
                        document.getElementById("card-romina").style.order = "3";
                        document.getElementById("card-julieta").style.order = "4";
                        document.getElementById("card-julieta").classList.remove("me-5");
                }

        }else if(orden[1] == votosromina) {
            document.getElementById("card-romina").style.order = "2";

            if(orden[2] == votosdaniela) {
                document.getElementById("card-daniela").style.order = "3";
                document.getElementById("card-julieta").style.order = "4";
                document.getElementById("card-julieta").classList.remove("me-5");
            } else {
                    document.getElementById("card-julieta").style.order = "3";
                    document.getElementById("card-daniela").style.order = "4";
                    document.getElementById("card-daniela").classList.remove("me-5");
            }
        }  
    } else if(orden[0] == votosdaniela) {
        document.getElementById("card-daniela").style.order = "1";

        if(orden[1] == votosjulieta) {
            document.getElementById("card-julieta").style.order = "2";
            if(orden[2] == votoscoti) {
                document.getElementById("card-coti").style.order = "3";
                document.getElementById("card-romina").style.order = "4";
                document.getElementById("card-romina").classList.remove("me-5");
            } else {
                    document.getElementById("card-romina").style.order = "3";
                    document.getElementById("card-coti").style.order = "4";
                    document.getElementById("card-coti").classList.remove("me-5");
            }

        } else if(orden[1] == votoscoti) {
                document.getElementById("card-coti").style.order = "2";

                if(orden[2] == votosjulieta) {
                    document.getElementById("card-julieta").style.order = "3";
                    document.getElementById("card-romina").style.order = "4";
                    document.getElementById("card-romina").classList.remove("me-5");
                } else {
                        document.getElementById("card-romina").style.order = "3";
                        document.getElementById("card-julieta").style.order = "4";
                        document.getElementById("card-julieta").classList.remove("me-5");
                }

        }else if(orden[1] == votosromina) {
            document.getElementById("card-romina").style.order = "2";

            if(orden[2] == votoscoti) {
                document.getElementById("card-coti").style.order = "3";
                document.getElementById("card-julieta").style.order = "4";
                document.getElementById("card-julieta").classList.remove("me-5");
            } else {
                    document.getElementById("card-julieta").style.order = "3";
                    document.getElementById("card-coti").style.order = "4";
                    document.getElementById("card-coti").classList.remove("me-5");
            }
        }  
    } else if(orden[0] == votosromina) {
        document.getElementById("card-romina").style.order = "1";
        document.getElementById("card-romina").classList.add("me-5");

        if(orden[1] == votosjulieta) {
            document.getElementById("card-julieta").style.order = "2";

            if(orden[2] == votoscoti) {
                document.getElementById("card-coti").style.order = "3";
                document.getElementById("card-daniela").style.order = "4";
                document.getElementById("card-daniela").classList.remove("me-5");
            } else {
                    document.getElementById("card-daniela").style.order = "3";
                    document.getElementById("card-coti").style.order = "4";
                    document.getElementById("card-coti").classList.remove("me-5");
            }

        } else if(orden[1] == votoscoti) {
                document.getElementById("card-coti").style.order = "2";

                if(orden[2] == votosjulieta) {
                    document.getElementById("card-julieta").style.order = "3";
                    document.getElementById("card-daniela").style.order = "4";
                    document.getElementById("card-daniela").classList.remove("me-5");
                } else {
                        document.getElementById("card-daniela").style.order = "3";
                        document.getElementById("card-julieta").style.order = "4";
                        document.getElementById("card-julieta").classList.remove("me-5");
                }

        }else if(orden[1] == votosdaniela) {
            document.getElementById("card-daniela").style.order = "2";

            if(orden[2] == votoscoti) {
                document.getElementById("card-coti").style.order = "3";
                document.getElementById("card-julieta").style.order = "4";
                document.getElementById("card-julieta").classList.remove("me-5");
            } else {
                    document.getElementById("card-julieta").style.order = "3";
                    document.getElementById("card-coti").style.order = "4";
                    document.getElementById("card-coti").classList.remove("me-5");
            }
        }  
    }



}