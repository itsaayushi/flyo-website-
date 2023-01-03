const alert_El = document.querySelector(".email-alert-detail");
const signup_btn_El = document.querySelector(".signup-btn");
const email_El = document.querySelector(".email");

signup_btn_El.addEventListener("click", function () {
  console.log(email_El.value);
});
