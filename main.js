const button = document.getElementById("buttonSubmit");

button.addEventListener("click", () => {
    const title = document.getElementById("titulo").value;
    const platform = document.getElementById("plataforma").value;
    const link = document.getElementById("link").value;
    const timeStart = document.getElementById("tiempoInicio").value;
    const timeEnd = document.getElementById("tiempoFin").value;
    const nota = document.getElementById("nota").value;
    const codeMd = document.getElementById("codeMd");
    codeMd.innerHTML = `### [${timeStart} - ${timeEnd}] ${[title]}
[🎧 Play ${platform} - 2min️ (${timeStart} - ${timeEnd})](${link})
#### Note
${nota}`
});