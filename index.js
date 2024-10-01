const submitEl = document.getElementById("submit");
const containerTwo = document.getElementById("container-two");
const dismissEl = document.getElementById("dismiss");
const formEl = document.getElementById("form");
const formContainer = document.getElementById("form-container");
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  formContainer.style.display = "none";
  containerTwo.style.display = "block";
});
dismissEl.addEventListener("click", function () {
  formContainer.style.display = "flex";
  containerTwo.style.display = "none";
});
