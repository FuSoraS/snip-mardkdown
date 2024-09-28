const button = document.getElementById("buttonSubmit");

button.addEventListener("click", () => {
    const titulo = document.getElementById("titulo").value;
    const plataforma = document.getElementById("plataforma").value;
    const link = document.getElementById("link").value;
    const tiempoInicio = document.getElementById("tiempoInicio").value;
    const tiempoFin = document.getElementById("tiempoFin").value;
    const nota = document.getElementById("nota").value;
    const codeMd = document.getElementById("codeMd");
    codeMd.innerHTML = `### [${tiempoInicio} - ${tiempoFin}] ${[titulo]}
[🎧 Play ${plataforma} - 2min️ (${tiempoInicio} - ${tiempoFin})](${link})
#### Note
${nota}`
});