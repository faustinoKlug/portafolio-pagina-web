const d = document;

export default function sobreMi(btnPerfil, btnEstudios, btnSkills, menuPerfil, menuEstudios, menuSkills) {
 const botonPerfil = d.querySelector(btnPerfil),
  botonEstudios = d.querySelector(btnEstudios),
  botonSkills = d.querySelector(btnSkills),
  perfil = d.querySelector(menuPerfil),
  estudios = d.querySelector(menuEstudios),
  skills = d.querySelector(menuSkills);

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
}
