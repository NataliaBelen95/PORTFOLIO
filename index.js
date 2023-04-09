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

$(document).ready(function () {
  $(".carrusel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Agregar esta opción para hacer que el carrusel se mueva automáticamente
    autoplaySpeed: 3000, // Opcional: establece la velocidad de cambio de diapositivas (en milisegundos)
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
