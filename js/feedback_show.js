var link = document.querySelector(".feedback__link");
var form__bg = document.querySelector(".feedback__bg");
var feedback__blok = document.querySelector(".feedback_blok");
var feedback__forma = document.querySelector(".feedback__form");
var close = document.querySelector(".feedback__close");
var login = feedback__forma.querySelector("[name=name]");
var email = feedback__forma.querySelector("[name=email]");
var review = feedback__forma.querySelector("[name=review]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form__bg.classList.add("show");
  feedback__blok.classList.add("show_spull");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  form__bg.classList.remove("show");
  feedback__blok.classList.remove("show_spull");
  feedback__blok.classList.remove("modal_error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (form__bg.classList.contains("show")) {
      form__bg.classList.remove("show");
      feedback__blok.classList.remove("show_spull");
      feedback__blok.classList.remove("modal_error");
    }
  }
});

// form__bg.addEventListener("click", function() {
//   form__bg.classList.remove("show");
// });


feedback__forma.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !review.value) {
    evt.preventDefault();
    feedback__blok.classList.remove("show_spull");
    feedback__blok.classList.remove("modal_error");
    feedback__blok.offsetWidth = feedback__blok.offsetWidth;
    feedback__blok.classList.add("modal_error");
  }
});
