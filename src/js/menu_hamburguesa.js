const d = document;

export default function menuHamburguesa(btn, menu) {
 const $boton = d.querySelector(btn),
  $menu = d.querySelector(menu);

 $boton.addEventListener("click", (e) => {
  $menu.classList.toggle("hidden");
 });
}
