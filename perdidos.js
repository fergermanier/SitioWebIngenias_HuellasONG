let formularioReporte = document.getElementById("formularioReportarPerdida");
let h3ReportePerdida = document.getElementById("h3ReportePerdida");
let pReportePerdida = document.getElementById("pReportePerdida");

let reportesVariosPerdidos = JSON.parse(localStorage.getItem("reportesVariosPerdidos"));

if (reportesVariosPerdidos !== null) {
	for (let i = 0; i < reportesVariosPerdidos.length; i++) {
		pReportePerdida.innerText = `Hola ${reportesVariosPerdidos[i].nombreReportePerdida}, te recordamos que ya ingresaste tu correo ${reportesVariosPerdidos[i].emailReportePerdida}, reportando la pérdida de ${reportesVariosPerdidos[i].animalPerdido} en ${reportesVariosPerdidos[i].zonaPerdida}. 
    ¡Estamos trabajando en su búsqueda!`;
	}
}

formularioReporte.addEventListener("submit", function (event) {
	event.preventDefault();

	let nombreReportePerdida = document.getElementById("nombreReportePerdida").value;
	let emailReportePerdida = document.getElementById("emailReportePerdida").value;
	let animalPerdido = document.getElementById("animalPerdido").value;
	let zonaPerdida = document.getElementById("zonaPerdida").value;

	if (
		nombreReportePerdida.trim() === "" ||
		emailReportePerdida.trim() === "" ||
		animalPerdido.trim() === "" ||
		zonaPerdida.trim() === ""
	) {
		alert("Completá todos los espacios");
		return;
	}

	let reportePerdida = {
		nombreReportePerdida: nombreReportePerdida,
		emailReportePerdida: emailReportePerdida,
		animalPerdido: animalPerdido,
		zonaPerdida: zonaPerdida,
	};

	let reportesVariosPerdidos = localStorage.getItem("reportesVariosPerdidos");

	if (reportesVariosPerdidos === null) {
		reportesVariosPerdidos = [reportePerdida];
	} else {
		reportesVariosPerdidos = JSON.parse(reportesVariosPerdidos);
		reportesVariosPerdidos.push(reportePerdida);
	}

	localStorage.setItem("reportesVariosPerdidos", JSON.stringify(reportesVariosPerdidos));

	let ultimoReportePerdidos = reportesVariosPerdidos[reportesVariosPerdidos.length - 1];

	h3ReportePerdida.innerText = `Chequeá los datos ingresados, ${ultimoReportePerdidos.nombreReportePerdida}:`;

	pReportePerdida.innerText = `Tu nombre es ${ultimoReportePerdidos.nombreReportePerdida}, tu correo ${ultimoReportePerdidos.emailReportePerdida}, el animal perdido es ${ultimoReportePerdidos.animalPerdido} y la zona donde se extravió es ${ultimoReportePerdidos.zonaPerdida}. 
    ¡Mucha suerte en la búsqueda!`;

	document.getElementById("nombreReportePerdida").value = "";
	document.getElementById("emailReportePerdida").value = "";
	document.getElementById("animalPerdido").value = "";
	document.getElementById("zonaPerdida").value = "";
});