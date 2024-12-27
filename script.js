const body = document.body;
const modeToggleSwitch = document.getElementById("dark-mode-toggle");

modeToggleSwitch.addEventListener("change", () => {
  if (modeToggleSwitch.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
  
const mobileNavBtn = document.getElementById("mobile-nav-trigger");
const mobileNav = document.querySelector(".mobile-nav");
mobileNavBtn.addEventListener("change", () => {
  if (mobileNavBtn.checked) {
    mobileNav.classList.add("mobile-nav-active");
  } else {
    mobileNav.classList.remove("mobile-nav-active");
  }
});
