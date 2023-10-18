/*Consigna: Combinar las consignas anteriores, y en vez de pedir esos datos a través de un prompt, hacerlo a través de un formulario. Validar los datos, almacenarlos en storage, y mostrarlos en alguna parte del sitio*/

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
      alert("Completá todos los espacios");
      return;
    }

    let reporte = {
      nombreReporte: nombreReporte,  
      email: emailReporte,
      animalPerdido: animalPerdido,
      zonaPerdida: zonaPerdida
    };

    let reportesVarios = localStorage.getItem("reportesVarios");

    if (reportesVarios === null) {
      reportesVarios = [reporte];
    } else {
      reportesVarios = JSON.parse(reportesVarios);
      reportesVarios.push(reporte);
    }

    localStorage.setItem("reportesVarios", JSON.stringify(reportesVarios));

    
    let ultimoReporte = reportesVarios[reportesVarios.length - 1];

    h3ReportePerdida.innerText = `Chequeá los datos ingresados, ${ultimoReporte.nombreReporte}:`;

    pReportePerdida.innerText = `Tu nombre es ${ultimoReporte.nombreReporte}, tu correo ${ultimoReporte.email}, el animal perdido es ${ultimoReporte.animalPerdido} y la zona donde se extravió es ${ultimoReporte.zonaPerdida}. 
    ¡Mucha suerte en la búsqueda!`;

    document.getElementById("nombreReporte").value = "";
    document.getElementById("emailReporte").value = "";
    document.getElementById("animalPerdido").value = "";
    document.getElementById("zonaPerdida").value = "";
  });
});
