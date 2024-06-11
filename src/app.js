const boton = document.querySelector("#boton"),
 menu = document.querySelector("#mobile-menu"),
 botonPerfil = document.querySelector("#perfil"),
 botonEstudios = document.querySelector("#estudios"),
 botonSkills = document.querySelector("#skills"),
 perfil = document.querySelector("#perfil-div"),
 estudios = document.querySelector("#estudios-div"),
 skills = document.querySelector("#skills-div");

boton.addEventListener("click", () => {
 menu.classList.toggle("hidden");
 menu.classList.toggle("block");
});

botonPerfil.addEventListener("click", () => {
 perfil.classList.add("block");
 perfil.classList.remove("hidden");
 estudios.classList.add("hidden");
 estudios.classList.remove("block");
 skills.classList.add("hidden");
 skills.classList.remove("grid");
});

botonEstudios.addEventListener("click", () => {
 perfil.classList.add("hidden");
 perfil.classList.remove("block");
 estudios.classList.add("block");
 estudios.classList.remove("hidden");
 skills.classList.add("hidden");
 skills.classList.remove("grid");
});

botonSkills.addEventListener("click", () => {
 perfil.classList.add("hidden");
 perfil.classList.remove("block");
 estudios.classList.add("hidden");
 estudios.classList.remove("block");
 skills.classList.add("grid");
 skills.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", (event) => {
 const header = document.getElementById("header");

 window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
   if (!header.classList.contains("header-pa")) {
    header.classList.add("header-pa");
   }
  } else {
   header.classList.remove("header-pa");
  }
 });
});

const redirectTo = (url) => {
 window.open(url, "_blank");
};

const copiarAlPortapapeles = () => {
 let textoACopiar = "clubfaustino";

 let campoTexto = document.createElement("textarea");
 campoTexto.value = textoACopiar;
 document.body.appendChild(campoTexto);

 campoTexto.select();
 campoTexto.setSelectionRange(0, 99999);

 document.execCommand("copy");

 document.body.removeChild(campoTexto);

 alert("Discord copiado al portapeles.");
}
