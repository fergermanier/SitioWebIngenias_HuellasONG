let formularioReporte = document.getElementById("formularioReportarEncontrado");
let h3ReporteEncontrado = document.getElementById("h3ReporteEncontrado");
let pReporteEncontrado = document.getElementById("pReporteEncontrado");

let reportesVariosEncontrados = JSON.parse(localStorage.getItem("reportesVariosEncontrados"));

if (reportesVariosEncontrados !== null) {
	for (let i = 0; i < reportesVariosEncontrados.length; i++) {
		pReporteEncontrado.innerText = `Hola ${reportesVariosEncontrados[i].nombreReporteEncontrado}, te recordamos que ya ingresaste tu correo ${reportesVariosEncontrados[i].emailEncontrado}, contándonos que encontraste a ${reportesVariosEncontrados[i].animalEncontrado} en ${reportesVariosEncontrados[i].zonaEncontrado}. 
    ¡Gracias por eso! Estamos trabajando en el caso.`;
	}
}

formularioReporte.addEventListener("submit", function (event) {
	event.preventDefault();

let nombreReporteEncontrado = document.getElementById("nombreReporteEncontrado").value;
let emailReporteEncontrado = document.getElementById("emailReporteEncontrado").value;
let animalEncontrado = document.getElementById("animalEncontrado").value;
let zonaEncontrado = document.getElementById("zonaEncontrado").value;
  
if (
  nombreReporteEncontrado.trim() === "" || 
  emailReporteEncontrado.trim() === "" || 
  animalEncontrado.trim() === "" || 
  zonaEncontrado.trim() === ""
  ) {
        alert("Completá todos los campos");
        return;
}
  
let reporteEncontrado = {
  nombreReporteEncontrado: nombreReporteEncontrado,
  emailEncontrado: emailReporteEncontrado,
  animalEncontrado: animalEncontrado,
  zonaEncontrado: zonaEncontrado,
};
  
let reportesVariosEncontrados = localStorage.getItem("reportesVariosEncontrados");
  
if (reportesVariosEncontrados === null) {
  reportesVariosEncontrados = [reporteEncontrado];
} else {
  reportesVariosEncontrados = JSON.parse(reportesVariosEncontrados);
  reportesVariosEncontrados.push(reporteEncontrado);
}
  
  localStorage.setItem("reportesVariosEncontrados", JSON.stringify(reportesVariosEncontrados));
  
  let ultimoReporteEncontrados = reportesVariosEncontrados[reportesVariosEncontrados.length - 1];
  
  h3ReporteEncontrado.innerText = `Chequeá los datos ingresados, ${ultimoReporteEncontrados.nombreReporteEncontrado}:`;
  
  pReporteEncontrado.innerText = `Tu nombre es ${ultimoReporteEncontrados.nombreReporteEncontrado}, tu correo ${ultimoReporteEncontrados.emailEncontrado}, el animal que encontraste es ${ultimoReporteEncontrados.animalEncontrado} y apareció en ${ultimoReporteEncontrados.zonaEncontrado}. 
  ¡Gracias a tu reporte pronto regresará a su hogar!`;
  
  document.getElementById("nombreReporteEncontrado").value = "";
  document.getElementById("emailReporteEncontrado").value = "";
  document.getElementById("animalEncontrado").value = "";
  document.getElementById("zonaEncontrado").value = "";
});
