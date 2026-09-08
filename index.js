const menu = document.querySelector("#menu-icon");
const navlinks = document.querySelector(".nav-links");
const navlinksItems = document.querySelectorAll(".nav-links li a");
menu.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});
navlinksItems.forEach((Link) => {
  Link.addEventListener("click", () => {
    navlinks.classList.remove("active");
  });
});
