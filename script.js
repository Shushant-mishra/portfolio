const body = document.body;
const modeToggleSwitch = document.getElementById("dark-mode-toggle");

modeToggleSwitch.addEventListener("change", () => {
  if (modeToggleSwitch.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      let activeLink = document.querySelector(`.nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
};

const mobileNavBtn = document.getElementById("mobile-nav-trigger");
const mobileNav = document.querySelector(".mobile-nav");
mobileNavBtn.addEventListener("change", () => {
  if (mobileNavBtn.checked) {
    mobileNav.classList.add("mobile-nav-active");
  } else {
    mobileNav.classList.remove("mobile-nav-active");
  }
});

// Contact form
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  submitBtn.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        submitBtn.innerHTML = "Submit";
        result.innerHTML = "Form submitted successfully";
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});