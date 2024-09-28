let button = document.getElementById("buttonSubmit");

button.addEventListener("click", () => {
    const titulo = document.getElementById("titulo").value;
    let plataforma = document.getElementById("plataforma").value;
    let link = document.getElementById("link").value;
    let tiempoInicio = document.getElementById("tiempoInicio").value;
    let tiempoFin = document.getElementById("tiempoFin").value;
    let nota = document.getElementById("nota").value;
    let codeMd = document.getElementById("codeMd");
    codeMd.innerHTML = `### [${tiempoInicio} - ${tiempoFin}] ${[titulo]}
[🎧 Play ${plataforma} - 2min️ (${tiempoInicio} - ${tiempoFin})](${link})
#### Note
${nota}`
});