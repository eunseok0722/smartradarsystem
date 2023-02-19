"use strict";

console.log("script start");

const d2Wrap = document.getElementsByClassName("d2-list-wrap");
const subHeader = document.querySelector(".sub-header");
const mainHeader = document.querySelector(".main-header-wrap");
const d1Item = document.getElementsByClassName("d1-item");

for (let i = 0; i < d1Item.length; i++) {
  d1Item[i].addEventListener("mouseenter", () => {
    for (let j = 0; j < d1Item.length; j++) {
      d2Wrap[j].classList.remove("active");
    }
    d2Wrap[i].classList.add("active");
  });
}
subHeader.addEventListener("mouseleave", () => {
  for (let i = 0; i < d1Item.length; i++) {
    d2Wrap[i].classList.remove("active");
  }
});

mainHeader.addEventListener("mouseenter", () => {
  mainHeader.classList.add("active");
});
mainHeader.addEventListener("mouseleave", () => {
  mainHeader.classList.remove("active");
});

const d3Item = document.querySelectorAll(".d3-item");
const itemActive = (number) => {
  for (let i = 0; i < d3Item.length; i++) {
    d3Item[i].classList.remove("active");
  }
  d3Item[number].classList.add("active");
};
const itemInActive = (number) => {
  for (let i = 0; i < d3Item.length; i++) {
    d3Item[i].classList.remove("active");
  }
};

