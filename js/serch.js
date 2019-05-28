var serch_link = document.querySelector(".search");
var serch_form = document.querySelector(".search__modal");
var login_link = document.querySelector(".login");
var login_form = document.querySelector(".login__modal");
var login_form_input = document.querySelector(".login__modal_input");

var email_login = login_form_input.querySelector("[name=email]");
var password_login = login_form_input.querySelector("[name=password]");

serch_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  serch_form.classList.add("show");
});

login_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  login_form.classList.add("show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (serch_form.classList.contains("show")) {
      serch_form.classList.remove("show");
      login_form.classList.remove("show");
    }
  }
});

// form__bg.addEventListener("click", function() {
//   form__bg.classList.remove("show");
// });


login_form_input.addEventListener("submit", function (evt) {
  if (!email_login.value || !password_login.value) {
    evt.preventDefault();
    login_form.classList.remove("modal_error");
    login_form.offsetWidth = login_form.offsetWidth;
    login_form.classList.add("modal_error");
  }
});
