const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var page4Animation = () => {
  var float = document.querySelector(".floating-container");
  var fixed = document.querySelector(".rectangle");

  float.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  float.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var allFloat = document.querySelectorAll(".floating-div");
  allFloat.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      var img = elem.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${img})`;
    });
  });
};

function cursorAnimation() {
  var page4 = document.querySelector("#page4 .swiper");
  var page = document.querySelector("body");
  var cursor = document.querySelector(".custom-cursor");

  page4.addEventListener("mouseenter", function () {
    cursor.style.display = "flex";
    page4.addEventListener("mousemove", function (elem) {
      gsap.to(cursor, {
        x: elem.x,
        y: elem.y,
        scrub: true,
        duration: 0.5,
      });
    });
  });
  page4.addEventListener("mouseleave", function () {
    cursor.style.display = "none";
  });
}

function homePageAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1 nav", {
    y: -50,
    duration: 1.5,
    opacity: 0,
    stagger: 1,
  });
  gsap.from("#center", {
    y: 50,
    duration: 1,
    delay: 0.3,
    opacity: 0,
  });
}

function loadingAnimation() {
  var starting = document.querySelector("#starting");
  setTimeout(function () {
    starting.style.top = "-100%";
  }, 4200);
}
page4Animation();
cursorAnimation();
homePageAnimation();
loadingAnimation();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
