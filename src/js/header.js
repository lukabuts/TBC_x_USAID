const header = document.getElementById("header");
const burger_btn = document.getElementById("burger_btn");
const nav = document.getElementById("nav");

// Add/Remove Header active class
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    header.classList.contains("active") && header.classList.remove("active");
  } else {
    !header.classList.contains("active") && header.classList.add("active");
  }
});

// Burger Btn
burger_btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger_btn.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !nav.contains(e.target) &&
    !burger_btn.contains(e.target) &&
    nav.classList.contains("active")
  ) {
    nav.classList.remove("active");
    burger_btn.classList.remove("active");
  }
});
