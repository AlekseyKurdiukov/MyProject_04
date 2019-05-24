var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var body = document.querySelector("body");

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.remove("bg_color_2");
  body.classList.remove("bg_color_3");
  body.classList.add("bg_color_1");
});

btn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.remove("bg_color_1");
  body.classList.remove("bg_color_3");
  body.classList.add("bg_color_2");
});

btn3.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.remove("bg_color_2");
  body.classList.remove("bg_color_1");
  body.classList.add("bg_color_3");
});
