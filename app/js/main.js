new WOW().init();
let prevScrollPos = window.pageYOffset;

const header = document.querySelector(".header");

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.classList.add("visible");
    header.classList.add("filled");
    header.classList.remove("hide");
  } else {
    if (window.scrollY >= 10) {
      console.warn("работаю");
      header.classList.add("hide");
      header.classList.remove("visible");
    }
  }
  console.log(window.scrollY);
  if (window.scrollY <= 5) {
    header.classList.remove("filled");
  }

  prevScrollPos = currentScrollPos;
};

$(".entertainment__bg").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade: true,
  asNavFor: ".entertainment_context",
  appendDots: $(".entertainment__navigation__dots"),

  prevArrow: $(".slick-prev-slide"),
  nextArrow: $(".slick-next-slide"),
});

$(".entertainment_context").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  draggable: false,
  speed: 500,
  arrows: false,
  adaptiveHeight: true,
});

// Аккордион
document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion__list", {
    duration: 700,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
    showMultiple: false,

    collapse: true,
  });
});

const burgerChB = document.getElementById("burger");
const burgerMenu = document.getElementById("burger_menu");

const openBuregerMenu = () => {
  burgerMenu.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeBurgerMenu = () => {
  burgerMenu.classList.remove("active");
  document.body.style.overflow = "visible";
  burgerChB.checked = false;
};

if (burgerChB) {
  burgerChB.addEventListener("change", () => {
    openBuregerMenu();
    burgerChB.checked ? openBuregerMenu() : closeBurgerMenu();
  });
}
document.addEventListener("click", (event) => {
  if (
    event.target != burgerMenu &&
    !event.composedPath().includes(document.getElementById("burger_btn")) &&
    burgerChB.checked
  ) {
    closeBurgerMenu();
  }
});

const modalWindowBtns = document.querySelectorAll(".send_application_btn");
const modalWindow = document.getElementById("modal_window_form");

const closeBtn = document.querySelector(".close_btn");

const openModalWindow = () => {
  modalWindow.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeModalWindow = () => {
  modalWindow.classList.remove("active");
  document.body.style.overflow = "visible";
};

modalWindowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    openModalWindow();
  });
});

closeBtn.addEventListener("click", () => {
  closeModalWindow();
});
