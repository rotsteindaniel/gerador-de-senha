let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

function generatePassword() {
    
}

sliderElement.addEventListener("input", function () {
  sizePassword.innerHTML = this.value;
});

buttonElement.addEventListener("click", generatePassword);
