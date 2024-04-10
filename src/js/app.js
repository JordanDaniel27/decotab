function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}

/* --------------------------- CARROUSEL ---------------------------- */
var carrouselTestimonios = new Swiper(".myTestimonios", {
  slidesPerView: 4, //3
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 0,
  pagination: {
    el: ".swiper-pagination-testimonios",
    clickable: true,
    /* dynamicBullets: true, */
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* ------------------------------------------------------------------ */

var carrouselBeneficios = new Swiper(".myBeneficios", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grab: false,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3)
  pagination: {
    el: ".swiper-pagination-beneficios",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

/* ------------------------------------------- */

var carrouselCategorias = new Swiper(".categorias", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  grab: false,
  centeredSlides: true,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3)
  pagination: {
    el: ".swiper-pagination-categorias",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

/* --------------------------------------------- */

var carrosuelDestacados = new Swiper(".productos-destacados", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  grab: false,

  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3)
  pagination: {
    el: ".swiper-pagination-productos-destacados",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* --------------------------------------------- */

var carrouselOferta = new Swiper(".productos-oferta", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  grab: false,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3)
  pagination: {
    el: ".swiper-pagination-productos-oferta",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* --------------------------------------------- */

var carrosuelComplementario = new Swiper(".productos-complementarios", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  grab: false,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3)

  pagination: {
    el: ".swiper-pagination-producto-complementario",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* --------------------------------------------- */

var carrouselHeader = new Swiper(".header-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  grab: true,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3)
  pagination: {
    el: ".swiper-pagination-slider-header",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

/* ------------------------------------------ */

var carrosuelProductoSlider = new Swiper(".producto-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  grab: true,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3)
  pagination: {
    el: ".swiper-pagination-productos",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

/* ------------------------------------------ */

var CarrosuelCatalogo = new Swiper(".producto-catalogo", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  grab: true,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3)
  pagination: {
    el: ".swiper-pagination-producto-catalogo",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

/* ------ */

/* // Obtener el checkbox y el nav
const checkbox = document.getElementById("check");
const bag = document.querySelector(".bag");
const body = document.querySelector(".body");

checkbox.addEventListener("click", checkboxOnClick);

// Agregar event listener al documento para cerrar el nav al hacer clic fuera de él
document.addEventListener("click", function (event) {
  // Verificar si el clic no ocurrió dentro del nav
  if (!bag.contains(event.target)) {
    bag.classList.add("hidden"); // Ocultar el nav
    checkbox.checked = false; // Desmarcar el checkbox
    console.log("click");
    body.classList.remove("dark");
    body.classList.remove("overflow-hidden");
  }
});

// Detener la propagación del clic dentro del nav para evitar que se cierre al hacer clic dentro de él
bag.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Agregar event listener al checkbox para detener la propagación y evitar cerrar el nav al hacer clic en él
checkbox.addEventListener("click", function (event) {
  event.stopPropagation();
});



// Función para manejar el evento de clic del checkbox
function checkboxOnClick() {
  if (checkbox.checked) {
    body.classList.add("dark");
    body.classList.add("overflow-hidden");
  }
} 
*/

/* const checkbox = document.getElementById("check");
const bag = document.querySelector(".bag");
const body = document.querySelector(".body");
let isMenuOpen = false; // Variable para controlar el estado del menú
const card = document.querySelector(".cartContainer");
checkbox.addEventListener("click", checkboxOnClick);

// Agregar event listener al checkbox para controlar el estado del menú
function checkboxOnClick() {
  // Cambiar el top del carrito
  const scrollTopPosition = window.scrollY;
  card.style.top = scrollTopPosition + "px";

  isMenuOpen = checkbox.checked;
  if (isMenuOpen) {
    body.classList.add("dark");
    body.classList.add("overflow-hidden");
    // Agregar el event listener al documento cuando se abre el menú
    document.addEventListener("click", handleDocumentClick);
  } else {
    body.classList.remove("dark");
    body.classList.remove("overflow-hidden");
    // Quitar el event listener del documento cuando se cierra el menú
    document.removeEventListener("click", handleDocumentClick);
  }
}

// Función para manejar el clic en el documento
function handleDocumentClick(event) {
  // Verificar si el menú está abierto y si el clic no ocurrió dentro del nav ni en el checkbox
  if (isMenuOpen && !bag.contains(event.target) && event.target !== checkbox) {
    bag.classList.add("hidden"); // Ocultar el nav
    checkbox.checked = false; // Desmarcar el checkbox
    body.classList.remove("dark");
    body.classList.remove("overflow-hidden");
    isMenuOpen = false; // Actualizar el estado del menú
    // Quitar el event listener del documento después de cerrar el menú
    document.removeEventListener("click", handleDocumentClick);
  }
}

// Detener la propagación de clics dentro del nav para evitar cerrarlo al hacer clic dentro
bag.addEventListener("click", function (event) {
  event.stopPropagation(); // Evitar que el clic se propague al documento
});
 */