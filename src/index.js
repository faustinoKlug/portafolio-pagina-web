
import headerScroll from "./js/header_scroll.js";
import menuHamburguesa from "./js/menu_hamburguesa.js";
import sobreMi from "./js/sobre_mi.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
 menuHamburguesa("#boton", "#mobile-menu");
 sobreMi("#perfil", "#estudios", "#skills", "#perfil-div", "#estudios-div", "#skills-div");
 headerScroll("#header");
});
