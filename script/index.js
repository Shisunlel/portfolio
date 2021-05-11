const date = document.querySelector("#date");
const toggler = document.querySelector(".toggler");
const navLink = document.querySelector(".nav-link");
const scroll = document.querySelector(".scroll");
const about = document.querySelector("#about");
const brand = document.querySelector(".brand");
const navBrand = document.querySelector(".navBrand");
const videoContainer = document.querySelectorAll(".video-container");

const setDate = () => {
  const now = new Date();
  date.innerText = now.getFullYear();
};

const scrollProgress = () => {
  const max = document.body.scrollHeight - window.innerHeight;
  scroll.style.width = `${(pageYOffset / max) * 100}%`;
};

const changeNavColor = () => {
  if (window.pageYOffset > about.offsetTop) {
    navBrand.classList.add("solid");
    brand.classList.remove("collapsed");
  } else {
    navBrand.classList.remove("solid");
    brand.classList.add("collapsed");
  }
};

const playVideoOnHover = function (e) {
  const video = this.children[0];
  video.play();
};

const pauseVideoOnHover = function (e) {
  const video = this.children[0];
  video.pause();
};

const playVideoOnClick = function (e) {
  const video = this.children[0];
  if (video.paused) {
    return video.play();
  }
  video.pause();
};

window.onload = setDate;

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  navLink.classList.toggle("collapsed");
});

window.addEventListener("scroll", () => {
  scrollProgress();
  changeNavColor();
});

videoContainer.forEach((e) => {
  e.addEventListener("mouseenter", playVideoOnHover);
  e.addEventListener("mouseleave", pauseVideoOnHover);
  e.addEventListener("click", playVideoOnClick);
});
