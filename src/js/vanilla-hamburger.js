import "vanilla-hamburger/spin-burger.js";

const mobileMenu = document.querySelector(".js-menu-container");
const burger = document.querySelector("spin-burger");
const openMenuBtn = document.querySelector(".js-open-menu");

burger.addEventListener("pressed-changed", (event) => {
  const pressed = event.detail.value;
});
