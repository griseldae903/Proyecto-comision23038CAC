
function validaForm(){

    let cNombre = false;
    let cApellido = false;
    let cMail = false;
    let cAdultos = false;
    let cMenores = false;
    let cBodega = false;

    const nombre = document.getElementsByName("name")[0].value;
    const msger = document.getElementById("escrito");
    if(/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(nombre)){
        document.getElementById("escrito").innerHTML = "Campo validado";
        msger.style.color = "green";
        console.log(nombre);
        cNombre = true;
    }else{
        document.getElementById("escrito").innerHTML = "Sólo letras y más de dos.";
        msger.style.color = "red";
    }
    
    const apellido = document.getElementsByName("apellido")[0].value;
    const mesger = document.getElementById("ape");
    if(/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(apellido)){
        document.getElementById("ape").innerHTML = "Campo validado";
        mesger.style.color = "green";
        console.log(apellido);
        cApellido = true;
    }else{
        document.getElementById("ape").innerHTML = "Sólo letras y más de dos.";
        mesger.style.color = "red";
    }
    
    const email = document.getElementsByName("email")[0].value;
    const mesager = document.getElementById("meil");
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById("meil").innerHTML = "Campo validado";
        mesager.style.color = "green";
        console.log(email);
        cMail = true
    }else{
        document.getElementById("meil").innerHTML = "Dirección de mail inválida";
        mesager.style.color = "red";
    }

    const adultos = document.getElementsByName("adultos")[0].value;
    const msg = document.getElementById("cantAdultos");
    if (adultos>0){
        msg.innerHTML = "Campo validado";
        msg.style.color = "green";
        console.log(adultos);
        cAdultos = true;
    }else{
        msg.innerHTML = "Debe ingresar un número mayor a cero (0)";
        msg.style.color = "red";
    }

    const menores = document.getElementsByName("menores")[0].value;
    const msge = document.getElementById("cantMenores");
    if (menores<0){
        msge.innerHTML = "Debe ingresar un número mayor o igual a cero (0)";
        msge.style.color = "red";
    }else{
        document.getElementById("cantMenores").innerHTML = "Campo validado";
        msge.style.color = "green";
        console.log(menores);
        cMenores = true;
    }

    const mesagere = document.getElementById("bodego");
    if (res.bodega[0].checked == true ||
        res.bodega[1].checked == true ||
        res.bodega[2].checked == true ||
        res.bodega[3].checked == true ) {
        mesagere.innerHTML = "Bodegón elegido";
        mesagere.style.color = "green";
        cBodega = true;
    }else{
        mesagere.innerHTML = "Debe seleccionar un bodegón";
        mesagere.style.color = "red";
    }
    
    if(cNombre && cApellido && cMail && cAdultos && cMenores && cBodega){
    }else{
        alert("El formulario contiene fallas que impiden su envío");
    }
}

const  desplazarArriba = document.querySelector("#flecha_arriba");

desplazarArriba.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",

    });
}); 

const elementosBene = document.querySelectorAll('.imagen-bene');

function mostrarElementos() {
  elementosBene.forEach(elemento => {
    const posicion = elemento.getBoundingClientRect();
    const alturaVentana = window.innerHeight;
    if (posicion.top < alturaVentana) {
      elemento.classList.add('visible');
    } else {
      elemento.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', mostrarElementos);
mostrarElementos();
//////////////////////
// const {createApp}=Vue;

// createApp({
//     data(){
//         return{
//             dibujologo: "index.html"
//         }
//     }
    
// }).mount('#navegadorbox');
