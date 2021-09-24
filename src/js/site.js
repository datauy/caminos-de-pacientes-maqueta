window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".js-btn-menu-toggle").forEach((item) => {
    item.addEventListener("click", (event) => {
      toggleMenu();
    });
  });

  document
    .querySelector(".cp-menu-dropdown__btn")
    .addEventListener("click", () => {
      document.querySelector(".cp-menu-dropdown").classList.toggle("active");
    });
});

function toggleMenu() {
  document.body.classList.toggle("menu-open");
}
