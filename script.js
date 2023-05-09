const toggle = document.querySelector(".toggle");
const toggleRemove = document.querySelector(".toggle-remove");
const mobileNav = document.querySelector(".navbar-mobile");

toggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

toggleRemove.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});
