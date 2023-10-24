let formulario = document.getElementById("formularioSuscribirse");

let h3Agradecimiento = document.getElementById("h3Agradecimiento");
let pContacto = document.getElementById("pContacto");

let usuariosVarios = JSON.parse(localStorage.getItem("usuariosVarios"));

if (usuariosVarios !== null) {
	for (let i = 0; i < usuariosVarios.length; i++) {
		pContacto.innerText = `Hola ${usuariosVarios[i].nombre}, te recordamos que ya ingresaste tu correo ${usuariosVarios[i].email}. 
        Muy pronto te contactaremos. ¡Muchas gracias!`;
	}
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (
        nombre.trim() === "" || 
        email.trim() === ""
        ) {
        alert("Completá todos los espacios");
        return; 
    }

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
  
pContacto.innerText = `Muy pronto, te escribiremos a ${ultimoUsuario.email} para terminar el proceso.`;

document.getElementById("nombre").value = "";
document.getElementById("email").value = "";
});

  