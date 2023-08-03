
function modoNocturnoFn(e) {

 const header = document.querySelector(".header");
 const login = document.querySelector(".login")
 const formulario = document.querySelector(".formulario");
 const dia = document.querySelector(".dia");

if(this.classList.toggle("active")){
    header.classList.remove("background-primario")
    header.classList.add("background-white")
    
    login.classList.add("background-primario")
   
    formulario.classList.add("background-white");
    formulario.classList.remove("background-primario");
} else {
    header.classList.remove("background-white")
    header.classList.add("background-primario")

    login.classList.remove("background-primario")
    login.classList.add("background-white")

    formulario.classList.add("background-primario");
    formulario.classList.remove("background-white");
}


}


const documento = document.addEventListener("DOMContentLoaded", () => {


    const modoNocturno = document.querySelector(".nocturno");

    modoNocturno.addEventListener("click", modoNocturnoFn)


})
