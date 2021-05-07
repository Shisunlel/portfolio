const date = document.querySelector("#date");
const toggler = document.querySelector(".toggler");
const navLink = document.querySelector(".nav__link");
const scroll = document.querySelector(".scroll");
const about = document.querySelector("#about");
const brand = document.querySelector('.brand')
const navBrand = document.querySelector(".navbrand");

const setDate = () => {
  const now = new Date();
  date.innerText = now.getFullYear();
};

window.onload = setDate;

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  navLink.classList.toggle("collapsed");
});

const scrollProgress = () => {
  const max = document.body.scrollHeight - window.innerHeight;
  scroll.style.width = `${(pageYOffset / max) * 100}%`;
};

const changeNavColor = () => {
  if (window.pageYOffset > about.offsetTop) {
    navBrand.classList.add("solid");
    brand.classList.remove('collapsed')
  } else {
    navBrand.classList.remove("solid");
    brand.classList.add('collapsed')
  }
};

window.addEventListener("scroll", () => {
  scrollProgress();
  changeNavColor();
});
