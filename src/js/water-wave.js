window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;
  var parallaxContent = document.querySelector(".parallax-wave");
  parallaxContent.style.transform = "translateX(" + scrolled * 0.05 + "px)"; // Измените коэффициент (0.5) для управления скоростью параллакса
});
