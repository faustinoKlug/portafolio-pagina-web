const d = document;

export default function headerScroll(header) {
 const $header = d.querySelector(header);

 window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
   if (!$header.classList.contains("header-pa")) {
    $header.classList.add("header-pa");
   }
  } else {
   $header.classList.remove("header-pa");
  }
 });
}
