let torre1 = document.querySelector(".torre1")
let torre2 = document.querySelector(".torre2")
let torre3 = document.querySelector(".torre3")

let nube = document.querySelector(".nube");

let dificultad = 87;

let puntuacion = document.querySelector(".puntuacion");
let jugador = document.querySelector(".jugador");

for (let i = 0; i < dificultad; i++) {
    let disco = document.createElement("div")
    disco.classList.add("disco");
    disco.classList.add("no-click");
    disco.innerHTML = i;
    disco.value = i;

    torre1.appendChild(disco)
}

let ancho = 15;

torre1.querySelectorAll(".disco").forEach((disco) => {
    disco.style.width = ancho + "%";
    ancho = ancho + 15;
})

torre1.value = torre1.firstChild.value;
torre2.value = 110;
torre3.value = 110;

document.querySelector(".hanoi").onclick = (e) => {
    if (nube.firstChild == null) {
        if (e.target == torre1 || e.target == torre2 || e.target == torre3) {
            try {
                nube.appendChild(e.target.firstChild);
            } catch (error) {
                alert("Coge una ficha primero, so zote!")
            }
            if (e.target.children.length > 0) {
                e.target.value = e.target.firstChild.value
            } else {
                e.target.value = 110;
            }
        }
    } else {
        if (nube.firstChild.value < e.target.value) {
            e.target.insertAdjacentElement("afterbegin", nube.firstChild);
            e.target.value = e.target.firstChild.value;
            puntuacion.innerHTML++;
            hasGanado();
        } else {
            alert("El tamaño SÍ importa..")
        }
    }
}

function codos() {
    let discos=document.querySelectorAll(".disco");
    let ez=dificultad-1;
    while(ez>=0){
        discos.forEach((disco)=>{
            if(disco.value==ez){
                torre3.insertAdjacentElement("afterbegin",disco);
                --ez;
            }
        });
    }
    hasGanado();
}

function hasGanado() {
    if (torre3.children.length == dificultad) {
        alert("Has ganado!");
    }
}

/* function mariaJose (){
    funcion destinada a la humiliasion
} */
