/*Consigna: Combinar las consignas anteriores, y en vez de pedir esos datos a través de un prompt, hacerlo a través de un formulario. Validar los datos, almacenarlos en storage, y mostrarlos en alguna parte del sitio*/

let formulario = document.getElementById("formularioReportarPerdida");

document.addEventListener("DOMContentLoaded", function() {
  let formularioReporte = document.getElementById("formularioReportarPerdida");
  let h3ReportePerdida = document.getElementById("h3ReportePerdida");
  let pReportePerdida = document.getElementById("pReportePerdida");

  formularioReporte.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let nombreReporte = document.getElementById("nombreReporte").value;
    let emailReporte = document.getElementById("emailReporte").value;
    let animalPerdido = document.getElementById("animalPerdido").value;
    let zonaPerdida = document.getElementById("zonaPerdida").value;

    if (nombreReporte.trim() === "" || emailReporte.trim() === "" || animalPerdido.trim() === "" || zonaPerdida.trim() === "") {
      alert("Por favor, completá todos los campos");
      return; 
    }

    console.log(formularioReporte)

    
    let reporte = {
      nombre: nombreReporte,
      email: emailReporte,
      animalPerdido: animalPerdido,
      zonaPerdida: zonaPerdida
    };

    
    let reporteJSON = JSON.stringify(reporte);

    
    localStorage.setItem("reporte", reporteJSON);

    
    h3ReportePerdida.innerText = `Chequeá los datos ingresados, ${nombreReporte}:`;

  
    pReportePerdida.innerText = `Tu nombre es ${nombreReporte}, tu correo ${emailReporte}, el animal perdido es ${animalPerdido} y la zona donde se extravió es ${zonaPerdida}. 
    ¡Mucha suerte en la búsqueda!`;


    document.getElementById("nombreReporte").value = "";
    document.getElementById("emailReporte").value = "";
    document.getElementById("animalPerdido").value = "";
    document.getElementById("zonaPerdida").value = "";
  });
});
