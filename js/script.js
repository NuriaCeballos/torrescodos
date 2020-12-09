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
