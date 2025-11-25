const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Menu-Horizontal");

if (toggle && menu) {
  // Toggle menú principal
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.innerHTML = menu.classList.contains("active")
      ? "&#10005;"
      : "&#9776;";
  });

  // Submenús en móvil
  menu.querySelectorAll("li").forEach((item) => {
    const submenu = item.querySelector(".Menu-vertical");
    if (submenu) {
      item.classList.add("has-submenu");
      item.querySelector("a").addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle("open");
          submenu.classList.toggle("active");
        }
      });
    }
  });

  // Cerrar al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("active");
      toggle.innerHTML = "&#9776;";
    }
  });
}
