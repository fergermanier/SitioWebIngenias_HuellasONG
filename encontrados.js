document.addEventListener("DOMContentLoaded", function() {
    let formularioReporte = document.getElementById("formularioReportarEncontrado");
    let h3ReporteEncontrado = document.getElementById("h3ReporteEncontrado");
    let pReporteEncontrado = document.getElementById("pReporteEncontrado");
  
    formularioReporte.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let nombreReporte = document.getElementById("nombreReporte").value;
      let emailReporte = document.getElementById("emailReporte").value;
      let animalEncontrado = document.getElementById("animalEncontrado").value;
      let zonaEncontrado = document.getElementById("zonaEncontrado").value;
  
      if (nombreReporte.trim() === "" || emailReporte.trim() === "" || animalEncontrado.trim() === "" || zonaEncontrado.trim() === "") {
        alert("Completá todos los campos");
        return;
      }
  
      let reporte = {
        nombreReporte: nombreReporte,
        email: emailReporte,
        animalEncontrado: animalEncontrado,
        zonaEncontrado: zonaEncontrado
      };
  
      let reportesVarios = localStorage.getItem("reportesVariosEncontrados");
  
      if (reportesVarios === null) {
        reportesVarios = [reporte];
      } else {
        reportesVarios = JSON.parse(reportesVarios);
        reportesVarios.push(reporte);
      }
  
      localStorage.setItem("reportesVariosEncontrados", JSON.stringify(reportesVarios));
  
      let ultimoReporte = reportesVarios[reportesVarios.length - 1];
  
      h3ReporteEncontrado.innerText = `Chequeá los datos ingresados, ${ultimoReporte.nombreReporte}:`;
  
      pReporteEncontrado.innerText = `Tu nombre es ${ultimoReporte.nombreReporte}, tu correo ${ultimoReporte.email}, el animal que encontraste es ${ultimoReporte.animalEncontrado} y apareció en ${ultimoReporte.zonaEncontrado}. 
      ¡Gracias a tu reporte pronto regresará a su hogar!`;
  
      document.getElementById("nombreReporte").value = "";
      document.getElementById("emailReporte").value = "";
      document.getElementById("animalEncontrado").value = "";
      document.getElementById("zonaEncontrado").value = "";
    });
  });  