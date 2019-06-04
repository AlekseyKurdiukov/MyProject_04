var serch_link = document.querySelector(".search");
var serch_form = document.querySelector(".search__modal");
// var news_link = document.querySelector(".site_navigation__news_link");
// var news_form = document.querySelector(".site_navigation__news");
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

// news_link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   news_form.classList.add("show");
// });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    serch_form.classList.remove("show");
    news_form.classList.remove("show");
    login_form.classList.remove("show");
    login_form.classList.remove("modal_error");
  }
});

$(".login").click(function() {
  $('.login__modal').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".login_container").length) {
    $('.login__modal').hide();
  }
  e.stopPropagation();
});

$(".search").click(function() {
  $('.search__modal').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".search_container").length) {
    $('.search__modal').hide();
  }
  e.stopPropagation();
});

// $(".site_navigation__news_link").click(function() {
//   $('.site_navigation__news').toggle();
// });
// $(document).on('click', function(e) {
//   if (!$(e.target).closest(".site_navigation").length) {
//     $('.site_navigation__news').hide();
//   }
//   e.stopPropagation();
// });

login_form_input.addEventListener("submit", function (evt) {
  if (!email_login.value || !password_login.value) {
    evt.preventDefault();
    login_form.classList.remove("modal_error");
    login_form.offsetWidth = login_form.offsetWidth;
    login_form.classList.add("modal_error");
  }
});
