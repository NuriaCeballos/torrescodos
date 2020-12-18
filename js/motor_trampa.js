let n = 0;

document.querySelectorAll(".carta").forEach((carta) => {
    carta.onclick = (e) => {
        e.target.src = "./images/delantera.png";
        ++n,
            setTimeout(Desactivar, 3000);
    }
})

function Desactivar() {
    if (n >= 2) {
        document.querySelector("audio").play();
        document.getElementById("bug").style.display = "block"
        document.querySelector("main").style.display = "none"
        document.querySelector("body").style.backgroundColor = "black"
    }
    /* document.querySelector("#btnModal").disabled = false */
}

// funcionalidad del enter y guardar en storage
nombre.addEventListener('keypress', function (e) {
    let keycode = e.keyCode || e.which
    if (nombre.value != "" && keycode == 13) {
        let partida = {
            nombre: nombre.value,
            movimientos: 0,
            dificultad: 4
        }
        localStorage.setItem(0, JSON.stringify(partida))
        location = "clave.html"
    }
    else {
        console.log("Está vacío")
    }
})

