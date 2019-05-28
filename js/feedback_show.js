var link = document.querySelector(".feedback__link");
var form = document.querySelector(".feedback__bg");
var feedback__form = document.querySelector(".feedback_blok");
var close = document.querySelector(".feedback__close");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.add("show");
  feedback__form.classList.add("show_spull");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.remove("show");
  feedback__form.classList.remove("show_spull");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (form.classList.contains("show")) {
      form.classList.remove("show");
      feedback__form.classList.remove("show_spull");
    }
  }
});
