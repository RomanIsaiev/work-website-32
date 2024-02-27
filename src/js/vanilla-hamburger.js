import "vanilla-hamburger/spin-burger.js";

const burger = document.querySelector("spin-burger");
burger.addEventListener("pressed-changed", (event) => {
  const pressed = event.detail.value;
});
