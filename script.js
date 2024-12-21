const body = document.body;
const modeToggleSwitch = document.getElementById("dark-mode-toggle");

modeToggleSwitch.addEventListener("change", () => {
  if (modeToggleSwitch.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
