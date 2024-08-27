const hearts = document.querySelectorAll(".heart");
for (let i = 0; i < hearts.length; i++) {
    hearts[i].onclick = function () {
        hearts[i].classList.toggle("heart_active");
    }
}


const check = document.querySelectorAll(".newmodel-card button");
for (let i = 0; i < check.length; i++) {
    check[i].onclick = function () {
        check[i].classList.toggle("check_active")
    }
}

const hamburger = document.querySelector(".hamburger");
const navLogo = document.querySelector(".nav__logo");
const navLinks = document.querySelector(".nav__links");
const navProfile = document.querySelector(".nav__profile");
hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navLogo.classList.toggle("nav__logo_active")
    navProfile.classList.toggle("nav__profile_active");
}
navLogo.onclick = function () {
    menuClose();
}
const navLinksAll = document.querySelectorAll(".nav__links a");
for (let i = 0; i < navLinksAll.length; i++) {
    navLinksAll[i].onclick = function () {
        menuClose();
    }
}
const navProfileAll = document.querySelectorAll(".nav__profile a");
for (let i = 0; i < navProfileAll.length; i++) {
    navProfileAll[i].onclick = function () {
        menuClose();
    }
}
function menuClose() {
    hamburger.classList.remove("hamburger_active");
    navLinks.classList.remove("nav__links_active");
    navLogo.classList.remove("nav__logo_active");
    navProfile.classList.remove("nav__profile_active");
}

const aboutUsBigImg = document.querySelector(".about-us__photo");
const aboutUsSmallImg = document.querySelector(".about-us_imgcontainer");
const aboutUsBlockImg = `<div class="about-us_blockimg">
                            <img src="{% static './core/img/about-us.png' %}" alt="">
                        </div>
                        `;

if (window.innerWidth < 993) {
    aboutUsSmallImg.innerHTML = aboutUsBlockImg;
} else {
    aboutUsBigImg.innerHTML = aboutUsBlockImg;
}

const checked = document.querySelector(".case-card__checkbox");
checked.onclick = function() {
    checked.classList.toggle("check_active");
}


const shopCaseButton = document.querySelector("#shopCase");
const shopCase = document.querySelector(".shop-case");
const caseCard = document.querySelector(".case-card");
const caseCardMenagment = document.querySelector(".case-card__menagment");

shopCaseButton.onclick = function() {
    shopCase.classList.toggle("shop-case_active");
    caseCard.classList.toggle("case-card_active");
    caseCardMenagment.classList.toggle("case-card__menagment_active");
}
function shopCaseClose() {
    shopCase.classList.remove("shop-case_active")
    caseCard.classList.remove("case-card_active");
    caseCardMenagment.classList.remove("case-card__menagment_active");
}

