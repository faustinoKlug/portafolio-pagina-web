const d = document;

const copiarAlPortapapeles = () => {
 let textoACopiar = "clubfaustino";

 let campoTexto = d.createElement("textarea");
 campoTexto.value = textoACopiar;
 d.body.appendChild(campoTexto);

 campoTexto.select();
 campoTexto.setSelectionRange(0, 99999);

 d.execCommand("copy");

 d.body.removeChild(campoTexto);

 alert("Discord copiado al portapeles.");
}

const redirectTo = (url) => {
    window.open(url, "_blank");
}