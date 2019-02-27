// const sectionEl = document.querySelector(".article__section");
// console.log("Selecting .article__section ", sectionEl);

const footerEl = document.querySelector(".article__footer");
console.log("Value of footerEl", footerEl);

const smallTextEl = document.querySelector(".smallText");
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");

console.log("Value of smallTextEl", smallTextEl);

const sectionEl = document.querySelectorAll(".article__section");
console.log("Value of sectionEl", sectionEl);

for (let i = 0; i < sectionEl.length; i++) {
     sectionEl[i].classList.add("new__class");
    console.log(sectionEl);
}