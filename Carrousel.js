const slider = document.querySelector(".items");
const slides = Array.from(document.querySelectorAll(".item"));
const buttons = Array.from(document.querySelectorAll(".button"));

let current = 0;
let prev = 4;
let next = 1;

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    i === 0 ? gotoPrev() : gotoNext();
  });
});

const gotoPrev = () => {
  current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
};

const gotoNext = () => {
  current < 4 ? gotoNum(current + 1) : gotoNum(0);
};

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  if (next === 5) {
    next = 0;
  }

  if (prev === -1) {
    prev = 4;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.remove("prev");
    slide.classList.remove("next");
  });

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};

// Adicione o código adicional para criar a descrição dos itens ativos
slides.forEach((slide, index) => {
  const description = document.createElement("p");
  description.innerHTML = "Obesin"; // Substitua com a descrição correta
  if (index === current) {
    slide.appendChild(description);
  }
});
