
let izquierda = document.querySelector("#izquierda")
let derecha = document.querySelector("#derecha")
let nombre = document.querySelector("#nombre")


izquierda.onclick = () => {
    izquierda.removeAttribute("src", "./images/trasera.svg")
    izquierda.setAttribute("src", "./images/delantera.png")

}
derecha.onclick = () => {
    derecha.removeAttribute("src", "./images/trasera.svg")
    derecha.setAttribute("src", "./images/delantera.png")
    Desactivar()
}

function Desactivar() {
    document.querySelector("#btnModal").disabled = false
}

//ventana modal
if (document.getElementById("btnModal")) {
    let modal = document.getElementById("tvesModal")
    let btn = document.getElementById("btnModal")

    btn.onclick = () => {
        modal.style.display = "block"

    }
}
// funcionalidad del enter y guardar en storage
nombre.addEventListener('keypress', function (e) {
    let keycode = e.keyCode || e.which   
if (nombre.value != "" && keycode == 13) {
    let partida = {
        fecha: new Date(),
        nombre: nombre.value,
        movimientos: 0,
        dificultad:4
      }
    
    sessionStorage.setItem("truco", JSON.stringify(partida))
    location="clave.html"
      
}
else {
        console.log("Está vacío")
}

})

