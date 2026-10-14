/* ปุ่มสามขีด */
function toggleMenu() {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    navbar.classList.toggle("active");
  }
}

/* Slider */
let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(number) {
  if (slides.length === 0) {
    return;
  }

  slides.forEach(function(slide) {
    slide.classList.remove("active");
  });

  dots.forEach(function(dot) {
    dot.classList.remove("active");
  });

  slides[number].classList.add("active");

  if (dots[number]) {
    dots[number].classList.add("active");
  }

  currentSlide = number;
}

function changeSlide(direction) {
  if (slides.length === 0) {
    return;
  }

  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

/* เปลี่ยนภาพทุก 5 วินาที */
if (slides.length > 0) {
  setInterval(function() {
    changeSlide(1);
  }, 5000);
}

/* กดเมนูแล้วปิดเมนูบนมือถือ */
const menuLinks = document.querySelectorAll(".navbar a");

menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      navbar.classList.remove("active");
    }
  });
});