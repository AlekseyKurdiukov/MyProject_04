var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var body = document.querySelector("body");
var headline1 = document.querySelector(".slider__headline_1");
var headline2 = document.querySelector(".slider__headline_2");
var headline3 = document.querySelector(".slider__headline_3");

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  headline1.classList.remove("net");
  headline1.classList.add("yes");
  headline2.classList.remove("yes");
  headline2.classList.add("net");
  headline3.classList.remove("yes");
  headline3.classList.add("net");
  body.classList.remove("bg_color_2");
  body.classList.remove("bg_color_3");
  btn2.classList.remove("active_btn");
  btn3.classList.remove("active_btn");
  body.classList.add("bg_color_1");
  btn1.classList.add("active_btn");
});

btn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  headline2.classList.remove("net");
  headline2.classList.add("yes");
  headline1.classList.remove("yes");
  headline1.classList.add("net");
  headline3.classList.remove("yes");
  headline3.classList.add("net");
  body.classList.remove("bg_color_1");
  body.classList.remove("bg_color_3");
  btn1.classList.remove("active_btn");
  btn3.classList.remove("active_btn");
  body.classList.add("bg_color_2");
  btn2.classList.add("active_btn");
});

btn3.addEventListener("click", function (evt) {
  evt.preventDefault();
  headline3.classList.remove("net");
  headline3.classList.add("yes");
  headline2.classList.remove("yes");
  headline2.classList.add("net");
  headline1.classList.remove("yes");
  headline1.classList.add("net");
  body.classList.remove("bg_color_2");
  body.classList.remove("bg_color_1");
  btn2.classList.remove("active_btn");
  btn1.classList.remove("active_btn");
  body.classList.add("bg_color_3");
  btn3.classList.add("active_btn");
});
