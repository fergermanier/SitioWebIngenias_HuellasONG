/*Consigna: Crear un formulario con al menos dos campos, validarlos y guardardos en localStorage en formato JSON*/

let formulario = document.getElementById("formularioSuscribirse");

document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.getElementById("formularioSuscribirse");
    let h3Agradecimiento = document.getElementById("h3Agradecimiento");
    let pContacto = document.getElementById ("pContacto");
  
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
  
let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
  
console.log(formulario)

/*Validación*/

if (nombre.trim() === "" || email.trim() === "") {
    alert("Completá todos los espacios");
    return; 
}

/*Se crea un objeto con los datos ingresados*/

let usuario = {
    nombre: nombre,
    email: email
};

let usuariosVarios = localStorage.getItem("usuariosVarios");

if (usuariosVarios === null) {
    usuariosVarios = [usuario];
} else {
    usuariosVarios = JSON.parse(usuariosVarios);
    usuariosVarios.push(usuario);
}

localStorage.setItem("usuariosVarios", JSON.stringify(usuariosVarios));

let ultimoUsuario = usuariosVarios [usuariosVarios.length - 1];


h3Agradecimiento.innerText = `¡Qué bueno saber que contamos con vos, ${ultimoUsuario.nombre}!`;
  
pContacto.innerText = `Muy pronto, te escribiremos a ${ultimoUsuario.email} para terminar el proceso`;

document.getElementById("nombre").value = "";
document.getElementById("email").value = "";
});
});
  