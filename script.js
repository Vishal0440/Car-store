const menubar = document.querySelector(".menubar");
const navMenu = document.querySelector(".navbar");

menubar.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// about
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles

    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// ......
import carDetail from "./data.js";
console.log(carDetail);

const container = document.querySelector(".explore-row");
console.log(container);

container.innerHTML = carDetail
  .map((item) => {
    const { img, name, year, rs } = item;
    return `<div class="explore-colum">
  <img src="${img}" alt="car1" />
  <p>${year}</p>
  <h3>${name}</h3>
  <h4>${rs}</h4>
  <button>Buy Now</button>
</div>`;
  })
  .join("");
