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

if (mainHeader) {
  mainHeader.addEventListener("mouseenter", () => {
    mainHeader.classList.add("active");
  });
  mainHeader.addEventListener("mouseleave", () => {
    mainHeader.classList.remove("active");
  });
}

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

const selected = document.querySelectorAll(".selected");
const showSelect = () => {
  for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener("click", (event) => {

      if (selected[i].nextElementSibling.classList.contains("selectHide")) {
        selected[i].nextElementSibling.classList.remove("selectHide");
      } else {
        selected[i].nextElementSibling.classList.add("selectHide");
      }
    });
  }
};
showSelect();
const breadcrumb = document.getElementsByClassName('breadcrumb');
const customSelect = document.getElementsByClassName(".custom-select");
const hideSelect = () => {
  // for (let i = 0; i < customSelect.length; i++) {
  //   customSelect[i].addEventListener("blur", (event) => {
  //     this.lastElementChild.classList.add("selectHide");
  //   });
  // }
  breadcrumb[0].addEventListener('blur', (event) => {
    console.log(event);
  })
};
hideSelect();

