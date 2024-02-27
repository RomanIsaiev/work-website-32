import Siema from "siema";

const mySiema = new Siema({
  selector: ".siema",
  duration: 200,
  easing: "ease-out",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
document.querySelector(".prev").addEventListener("click", () => mySiema.prev());
document.querySelector(".next").addEventListener("click", () => mySiema.next());

// const mySiemaTwo = new Siema({
//   selector: ".siema-reviews",
//   duration: 200,
//   easing: "ease-out",
//   perPage: 1,
//   startIndex: 0,
//   draggable: true,
//   multipleDrag: true,
//   threshold: 20,
//   loop: false,
//   rtl: false,
//   onInit: () => {},
//   onChange: () => {},
// });
// document
//   .querySelector(".prev-reviews")
//   .addEventListener("click", () => mySiemaTwo.prev());
// document
//   .querySelector(".next-reviews")
//   .addEventListener("click", () => mySiemaTwo.next());
