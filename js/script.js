let torre1 =document.querySelector(".torre1")
let torre2 =document.querySelector(".torre2")
let torre3 =document.querySelector(".torre3")

let nube= document.querySelector(".nube");

for(let i=30;i<110;i+=15){
    let disco=document.createElement("div")
    disco.classList.add("disco",)
    disco.style.width=i+"%";
    disco.innerHTML=i;
    disco.draggable="true";
    disco.id=i;

    console.log(disco)
    torre1.appendChild(disco)
}


torre1.ondragstart=(e)=>{
    drag(e);
} 

torre2.ondragstart=(e)=>{
    drag(e);
}
torre3.ondragstart=(e)=>{
    drag(e);
}

torre1.ondrop=(e)=>{
    drop(e)
}

torre1.ondragover=(e)=>{
    allowDrop(e);
}  

torre2.ondrop=(e)=>{
    drop(e)
}

torre2.ondragover=(e)=>{
    allowDrop(e);
}  

torre3.ondrop=(e)=>{
    drop(e)
}

torre3.ondragover=(e)=>{
    allowDrop(e);
}

<<<<<<< HEAD
=======
sacarNumero.onclick=()=>{
    let numero = numeros.shift()
    if(numero.valor==1) 
        if(confirm("Te ha salido un 1. ¿Quieres que valga 10?")) numero.valor=10
    jugada.push(numero)
    if(numeros.length==0) mezclarNumeros()
    carta.src=`/images/baraja/${numero.imagen}`
    let minicarta=carta.cloneNode()
    minicarta.style.width="60px"
    document.querySelector(".jugada").appendChild(minicarta)
    comprobarJugada()
    carta.src=`/images/baraja/${numero.imagen}`
    //clonamos la carta pequeñita y la mostramos en la jugada:
    let minicarta=carta.cloneNode()
    minicarta.style.width="60px"
    document.querySelector(".jugada").appendChild(minicarta)
}
 
function comprobarJugada(){
    console.log(jugada)
    let total=jugada.map(c=>c.valor).reduce((a,b)=>a+b)
    resultado.innerHTML=total    
    if(total==21)
        resultado.innerHTML+="HAS GANADO"
    else if(total>21)
        resultado.innerHTML+="HAS PERDIDO"
}





>>>>>>> 24949a53abceba33f3fcfc284e48b7ce9af67220

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.target.parentNode);
 
    if(data < ev.target.id || ev.target.innerHTML=="" ){
        ev.target.appendChild(document.getElementById(data));    
    }
    
  }


  /* document.querySelector(".torre2").hasChildNodes() */
