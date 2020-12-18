crearTabla();

function crearTabla() {
    leToucan(4);
    for (let i = 0; i < localStorage.length; i++) {
            let clon = document.querySelector(".jugador").cloneNode(true);
            clon.style.display = "flex";

            let nombre = clon.querySelector(".nombre");
            nombre.textContent = JSON.parse(localStorage.getItem(i)).nombre;

            let dificultad = clon.querySelector(".dificultad");
            dificultad.textContent = JSON.parse(localStorage.getItem(i)).dificultad;

            let movimientos = clon.querySelector(".movimientos");
            movimientos.textContent = JSON.parse(localStorage.getItem(i)).movimientos;

            document.querySelector(".container").appendChild(clon);
            colorinesJugador();   
    }
}

//leToucan genera jugadores random para llenar el sesionstorage
function leToucan(n) {
    let nj = JSON.parse(localStorage.getItem(0));

    for (let i = 0; i < n; i++) {
        nj.nombre = "" + Math.floor(Math.random() * (99999 + 1) + 1);
        nj.dificultad = Math.floor(Math.random() * (3 + 1) + 4);
        nj.movimientos = Math.floor(Math.random() * (10 + 1) + 15);
        localStorage.setItem(localStorage.length, JSON.stringify(nj))
    }
}

//romper LocalStorage
function elAlzeimer(n) {
    let i=0;
    while(i<=n){
        localStorage.removeItem(localStorage.length-1)
        ++i
    }
}

//funcion randomcolorz
function colorinesJugador() {
    var colorJug = document.querySelectorAll(".jugador");

    colorJug.forEach(function (ye) {
        var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        var rgbString = r + ", " + g + ", " + b;
        ye.style.backgroundColor = 'rgb(' + rgbString + ')';
    });
}

//ordena los contactos por orden alfabetico
function sortPlayers() {
    localStorage.sort((a, b) => {
        if (a.movimientos > b.movimientos) {
            return 1;
        } else if (a.movimientos > b.movimientos) {
            return -1;
        } else {
            return 0;
        }
    })
}
