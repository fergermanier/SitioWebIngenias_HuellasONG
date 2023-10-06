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
    alert("Por favor, completá todos los campos");
    return; 
}

/*Se crea un objeto con los datos ingresados*/

let usuario = {
    nombre: nombre,
    email: email
};

/* Se convierte el objeto a formato JSON*/

let usuarioJSON = JSON.stringify(usuario);

/* Se guarda en localStorage */

localStorage.setItem("usuario", usuarioJSON);

  
/*Traer esos datos desde el localStorage y mostrarlos en alguna página del sitio*/

/* Código para mostrar los datos en la página */

h3Agradecimiento.innerText = `¡Qué bueno saber que contamos con vos, ${nombre}!`;
  
pContacto.innerText = `Muy pronto, te escribiremos a ${email} para terminar el proceso`;

document.getElementById("nombre").value = "";
document.getElementById("email").value = "";
});
});
  