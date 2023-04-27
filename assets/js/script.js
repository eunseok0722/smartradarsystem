const body = document.querySelector("body");
const d2Wrap = document.getElementsByClassName("d2-list-wrap");
const subHeader = document.querySelector(".sub-header");
const mainHeader = document.querySelector(".main-header-wrap");
const d1Item = document.getElementsByClassName("d1-item");
const gnbWrap = document.querySelector(".gnb-wrap");
const btnMo = document.querySelector(".btn-mo");
const d2Item = document.querySelectorAll('.d2-item');
const mainPop = document.querySelector(".main-popup-wrap");
const btnX = document.querySelector('.btn-x.ty02');
/* header */

// if (window.matchMedia("(max-width: 1279px)").matches) {
  // 모바일 환경 인터렉션 정의
  // 모바일 gnb mo-btn 클릭 동작
  btnMo.addEventListener("click", () => {

    if(gnbWrap.classList.contains('active')) {
      body.style.overflow = 'unset';
      gnbWrap.classList.remove("active");
      for (let j = 0; j < d1Item.length; j++) {
        d1Item[j].querySelector('button.nav-item').classList.remove("active");
        d2Wrap[j].classList.remove("active");
      }
      for (let n=0; n < d2Item.length; n++) {
        d2Item[n].classList.remove('active');
      }
    }else {
      body.style.overflow = 'hidden';
      gnbWrap.classList.add("active");
      d2Wrap[0].classList.add("active");
      d1Item[0].querySelector('button.nav-item').classList.add("active");
    }
  });

  // GNB depth1 동작 구현
  for (let l = 0; l < d1Item.length; l++) {
    d1Item[l].addEventListener("click", () => {
      for (let j = 0; j < d1Item.length; j++) {
        d1Item[j].querySelector('button.nav-item').classList.remove("active");
        d2Wrap[j].classList.remove("active");
      }
      d2Wrap[l].classList.add("active");
      d1Item[l].querySelector('button.nav-item').classList.add("active");
    });
  }
  // GNB depth2 동작 구현
  for (let m = 0; m < d2Item.length; m++ ) {
    d2Item[m].addEventListener('click', (e) => {
      e.stopPropagation();
      if (d2Item[m].classList.contains('active')) {
        for (let n=0; n < d2Item.length; n++) {
          d2Item[n].classList.remove('active');
        }
      }else {
        for (let n=0; n < d2Item.length; n++) {
          d2Item[n].classList.remove('active');
        }
        d2Item[m].classList.add('active');
      }
    })
  }

// } else {
  // pc환경 인터렉션 정의
  for (let i = 0; i < d1Item.length; i++) {
    d1Item[i].addEventListener("mouseenter", () => {
      for (let j = 0; j < d1Item.length; j++) {
        d2Wrap[j].classList.remove("active");
        d1Item[j].querySelector('button.nav-item').classList.remove("active");
      }
      d2Wrap[i].classList.add("active");
      d1Item[i].querySelector('button.nav-item').classList.add("active");
    });
  }
  subHeader.addEventListener("mouseleave", () => {
    for (let i = 0; i < d1Item.length; i++) {
      d2Wrap[i].classList.remove("active");
      d1Item[i].querySelector('button.nav-item').classList.remove("active");
    }
  });
// }
/* header */

/* Application main 동작구현 */

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
/* // Application main 동작구현 */

/* breadcrumb */
const breadcrumb = document.getElementsByClassName("breadcrumb");
const customSelect = document.getElementsByClassName(".custom-select");
const selected = document.getElementsByClassName("selected");
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

const hideSelect = () => {
  document.addEventListener("click", (event) => {
    for (let i = 0; i < selected.length; i++) {
      if (event.target !== selected[i]) {
        selected[i].nextElementSibling.classList.add("selectHide");
      }
    }
  });
};
hideSelect();
/* // breadcrumb */

/* change language */

const chLang = document.getElementsByClassName("change-lang")[0];
const listLang = document.querySelector(".lang-list-wrap");
chLang.addEventListener("mouseenter", (event) => {
  listLang.classList.add("active");
});
chLang.addEventListener("mouseleave", (event) => {
  listLang.classList.remove("active");
});

/* //change language */

/* main */
if(mainPop) {
  btnX.addEventListener('click', function() {
    mainPop.classList.add('hidden');
  })
}

/* // main */

/* awards */

const popWrap = document.querySelector(".popup-wrap");
const popActive = function (num) {
  const pop = document.querySelector(".pop-" + num);
  window.scrollTo(0, 0);
  body.style.overflow = "hidden";
  popWrap.classList.add("active");
  pop.classList.add("active");
};

const popClose = function () {
  const popUp = document.getElementsByClassName("popup");
  body.style.overflow = "";
  popWrap.classList.remove("active");
  for (let i = 0; i < popUp.length; i++) {
    popUp[i].classList.remove("active");
  }
};

/* //awards */

/* Investors & Partners */
const tableItemActive = function (that) {
  const tableItems = document.getElementsByClassName("item-content");
  const target = that.parentElement.nextElementSibling;

  if (target.classList.contains("active")) {
    for (let i = 0; i < tableItems.length; i++) {
      tableItems[i].classList.remove("active");
    }
  } else {
    for (let i = 0; i < tableItems.length; i++) {
      tableItems[i].classList.remove("active");
    }
    target.classList.add("active");
  }
};
/* //Investors & Partners */

/* footer */
const wrapper = document.getElementById("wrapper");

const btnTop = function () {
  wrapper.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};
/* footer */

/* scroll event */
const contHeader = document.querySelector(".content-header");
const headerFix = document.querySelector(".header-fix-div");
const topBtn = document.querySelector(".ico-arrow-top");
let timer = null;
let scrollY = 0;
let lastScrollY = 0;

if (headerFix && topBtn) {
  document.addEventListener("scroll", () => {
    if (timer === null) {
      timer = setTimeout(function () {
        lastScrollY = scrollY;
        scrollY = window.scrollY;

        /* header fix */
        if (scrollY >= 300) {
          contHeader.classList.add("header-fix-padding");
          headerFix.classList.add("header-fix");
        } else {
          contHeader.classList.remove("header-fix-padding");
          headerFix.classList.remove("header-fix");
        }
        /* header fix */

        /* top button */
        if (scrollY >= 800) {
          topBtn.classList.add("active");
        } else {
          topBtn.classList.remove("active");
        }
        /* top button */

        clearTimeout(timer);
        timer = null;
      }, 200);
    }
  });
}

if (topBtn) {
  document.addEventListener("scroll", () => {
    if (timer === null) {
      timer = setTimeout(function () {
        lastScrollY = scrollY;
        scrollY = window.scrollY;

        /* top button */
        if (scrollY >= 800) {
          topBtn.classList.add("active");
        } else {
          topBtn.classList.remove("active");
        }
        /* top button */

        clearTimeout(timer);
        timer = null;
      }, 200);
    }
  });
}


/* //scroll event */
