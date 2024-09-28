const button = document.getElementById("buttonSubmit");

button.addEventListener("click", () => {
    const title = document.getElementById("titulo").value;
    const platform = document.getElementById("plataforma").value;
    const link = document.getElementById("link").value;
    const timeStart = document.getElementById("tiempoInicio").value;
    const timeEnd = document.getElementById("tiempoFin").value;
    const note = document.getElementById("nota").value;
    const codeMd = document.getElementById("codeMd");
    
    let content = `### [${timeStart} - ${timeEnd}] ${[title]}
[🎧 Play ${platform} - (${timeStart} - ${timeEnd})](${link})`

// if theren't notes, don't add anything
    if (note != "") {
        content += `
#### Note
${note}`;
    }

    codeMd.innerHTML = content;
});