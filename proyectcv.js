let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    // oculto el menu cuando selecciono una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
// funcion qu aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("Hmtl");
        habilidades[2].classList.add("Css");
        habilidades[3].classList.add("Php");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
       
    }
}

// efecto scroll para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
} 

function saveMessage(){
    let name_Contact = document.getElementById("name")
    let numeroTelefonico_Contact = document.getElementById("numero telefonico")
    let direccionDeCorreo_Contact = document.getElementById("direccion de correo")
    let tema_Contact = document.getElementById("tema")
    let mensaje_Contact = document.getElementById("mensaje")
    alert("creacion contacto")
    return true;
}