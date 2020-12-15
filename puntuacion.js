

 //recuperar datos del session y lo mostramos
 function mostrarDatos(){
    let recuperado=JSON.parse(sessionStorage.getItem("truco"))
    resultado.innerHTML=recuperado
    
}


0