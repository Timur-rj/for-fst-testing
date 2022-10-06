const burgirIcon = document.querySelector(".bi-list");
const XIcon = document.querySelector(".bi-x-lg");
const menu__section = document.querySelector(".menu__section");

burgirIcon.addEventListener("click", () => {
  menu__section.style.opacity = "1";

  burgirIcon.classList.remove("nav_active");
  XIcon.classList.add("nav_active");
  menu__section.classList.add("ul_active");
});

XIcon.addEventListener("click", () => {
  XIcon.classList.remove("nav_active");
  burgirIcon.classList.add("nav_active");
  menu__section.classList.remove("ul_active");
  menu__section.style.opacity = "0.2";
});
