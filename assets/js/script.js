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

/* awards */
const body = document.querySelector("body");
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
const topBtn = document.querySelector('.ico-arrow-top');
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
                    topBtn.classList.add('active');
                } else {
                    topBtn.classList.remove('active');
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
                    topBtn.classList.add('active');
                } else {
                    topBtn.classList.remove('active');
                }
                /* top button */

                clearTimeout(timer);
                timer = null;
            }, 200);
        }

    });
}


/* //scroll event */
