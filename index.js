const pathToForm = document.querySelector("form");
pathToForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
function windowWidth() {
  const pathToMobile = this.document.querySelector("#main-img");
  const pathToDesktop = this.document.querySelector("#desktop-img");
  if (this.window.innerWidth > 992) {
    pathToMobile.style.display = "none";
    pathToDesktop.style.display = "block";
  } else if (this.window.innerWidth <= 992) {
    pathToMobile.style.display = "block";
    pathToDesktop.style.display = "none";
  }
}

window.addEventListener("resize", windowWidth);

function emailValidation() {
  const value = document.querySelector("input[type='text']").value;
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const check = reg.test(value);
  const pathToText = document.getElementById("error-message");
  const pathToIcon = document.getElementById("error-img");
  if (!check) {
    pathToText.style.display = "block";
    pathToIcon.style.display = "block";
    pathToForm.style.border = "2px solid red";
  } else {
    pathToText.style.display = "none";
    pathToIcon.style.display = "none";
    pathToForm.style.border = "1px solid hsla(0, 36%, 70%, 0.5)";
  }
}
