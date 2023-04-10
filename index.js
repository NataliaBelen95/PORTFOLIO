const navbar = document.querySelector(".navbar");
const heroSection = document.querySelector(".hero-section");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > heroSection.offsetHeight) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

const boton = document.querySelector("#modo");
const body = document.querySelector("body");
const svgHero = document.querySelector(".svg-hero");

boton.addEventListener("click", function () {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  svgHero.classList.toggle("svg-hero-light");
  svgHero.classList.toggle("svg-hero-dark");
  navbar.classList.toggle("navbar-light");
  navbar.classList.toggle("navbar-dark");
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});