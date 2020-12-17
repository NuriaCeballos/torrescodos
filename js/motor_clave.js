let torre1 = document.querySelector(".torre1")
let torre2 = document.querySelector(".torre2")
let torre3 = document.querySelector(".torre3")

let nube = document.querySelector(".nube");

let dificultad = 4;
let alto = 30;
let espacio = ((dificultad + 1) * alto);

let jugador = JSON.parse(sessionStorage.getItem("partida"));
document.querySelector(".puntuacion").innerHTML = jugador.movimientos;
document.querySelector(".jugador").innerHTML = jugador.nombre;


function crearTorres() {
    let ancho = 25;

    for (let i = 0; i < dificultad; i++) {
        let disco = document.createElement("div")
        disco.classList.add("disco");
        disco.classList.add("no-click");

        disco.value = i;
        disco.style.width = ancho + "%";
        ancho = ancho + 15;
        torre1.appendChild(disco)
        colorinesHanoi();
    }

    torre1.style.height = espacio;
    torre2.style.height = espacio;
    torre3.style.height = espacio;
    torre1.style.paddingTop = espacio - (torre1.children.length) * alto + "px";

    torre1.value = torre1.firstChild.value;
    torre2.value = 110;
    torre3.value = 110;
}

crearTorres();

//el juego en un click
document.querySelector(".hanoi").onclick = (e) => {
    if (nube.firstChild == null) {
        if (e.target == torre1 || e.target == torre2 || e.target == torre3) {
            try {
                nube.appendChild(e.target.firstChild);
            } catch (error) {
                alert("Coge una ficha primero, so zote!")
            }
            if (e.target.children.length > 0) {
                e.target.value = e.target.firstChild.value;
                e.target.style.paddingTop = espacio - (e.target.children.length) * alto + "px";
            } else {
                e.target.value = 110;
                e.target.style.paddingTop = espacio - (e.target.children.length) * alto + "px";
            }
        }
    } else {
        if ((e.target == torre1 || e.target == torre2 || e.target == torre3)) {
            if (nube.firstChild.value < e.target.value) {
                e.target.insertAdjacentElement("afterbegin", nube.firstChild);
                e.target.value = e.target.firstChild.value;
                e.target.style.paddingTop = espacio - (e.target.children.length) * alto + "px";
                ++jugador.movimientos;
                document.querySelector(".puntuacion").innerHTML = jugador.movimientos;
                hasGanado();
            } else {
                document.querySelector("audio").play()
                alert("El tamaño SÍ importa..")
            }    
        }
    }
}

//comprueba la victoria
let n = 0;
function hasGanado() {
    if (torre3.children.length == dificultad) {
        alert("¡Enhorabuena por haber llegado hasta aquí, " + jugador.nombre + "! Has completado la partida en " + jugador.movimientos + " movimientos, buen trabajo!");
        sessionStorage.setItem("partida" + n, JSON.stringify(jugador));
        n = n + 1;
        location="puntuacion.html"
    }
}

//truqui 
function codos() {
    let discos = document.querySelectorAll(".disco");
    let ez = dificultad - 1;
    while (ez >= 0) {
        discos.forEach((disco) => {
            if (disco.value == ez) {
                torre3.insertAdjacentElement("afterbegin", disco);
                --ez;
            }
        });
    }
    hasGanado();
}

//funcion randomcolorz
function colorinesHanoi() {
    var colorDisco = document.querySelectorAll(".disco");
    colorDisco.forEach(function (ye) {
        var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        var rgbString = r + ", " + g + ", " + b;
        ye.style.backgroundColor = 'rgb(' + rgbString + ')';
    });
}

//cambio la dificultad
function cambiarDificultad() {
    let respuesta = confirm("Cambiar de dificultad reiniciará su partida, ¿desea continuar?");
    if (respuesta != false) {
        let btn_diff = document.getElementsByName("dificultad");
        for (let i = 0; i < btn_diff.length; i++) {
            if (btn_diff[i].checked != false) {
                dificultad = parseInt(btn_diff[i].value);
            }
        }
        jugador.movimientos = 0;
        jugador.dificultad = dificultad;
        document.querySelector(".puntuacion").innerHTML = jugador.movimientos;
        robertOppenheimer();
        crearTorres();
        controlVentana();
    }
}

//destruyo el juego
function robertOppenheimer() {
    let discos = document.querySelectorAll(".disco");
    discos.forEach((disco) => {
        disco.remove();
    });
}

/*Ventana emergente version marta (reworked)*/
function controlVentana() {
    if (document.querySelector(".ventana").style.display == "none") {
        document.querySelector(".ventana").style.display = "block";
    } else {
        document.querySelector(".ventana").style.display = "none"
    }
}


/* function desmoralizarTropa (){
    let desmo=document.getElementsByName("mal");
    desmo.forEach((audio)=>{

    })
}  */
