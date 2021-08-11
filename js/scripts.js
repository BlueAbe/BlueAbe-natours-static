// script for open close menu
const links = document.querySelectorAll(".navigation__link");
const checkbox = document.getElementById("nav-toggle");
links.forEach((element) => {
  element.addEventListener("click", (e) => {
    checkbox.checked = false;
  });
});

//script for open close popup
const popup = document.querySelector(".popup");
const popupLinks = document.querySelectorAll(".btn-card");
const popupClose = document.querySelector(".popup__close");
popupLinks.forEach((element) => {
  element.addEventListener("click", (e) => {
    popup.classList.remove("popup--hide");
    popup.classList.add("popup--show");
  });
});

document.addEventListener("click", (e) => {
  let targetElement = e.target;
  if (targetElement === popupLinks[0]) return;
  if (targetElement === popupLinks[1]) return;
  if (targetElement === popupLinks[2]) return;
  if (targetElement === popupClose) {
    popup.classList.remove("popup--show");
    popup.classList.add("popup--hidden");
    return;
  }
  targetElement = e.target.closest(".popup__content");
  console.log(targetElement);
  if (targetElement !== null) return;
  popup.classList.remove("popup--show");
  popup.classList.add("popup--hidden");
});
