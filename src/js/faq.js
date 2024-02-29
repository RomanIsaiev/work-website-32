import $ from "jquery";

$(".question-two").click(function () {
  $(this).find(".content-two").toggle(200);
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});
