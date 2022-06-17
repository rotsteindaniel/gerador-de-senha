let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

function generatePassword() {
  let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()';
  let pass = '';
  let charsetLenght = charset.length;
  for (let i = 0; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * charsetLenght));
  }
  containerPassword.classList.remove('hide');
  password.innerHTML = pass;
  newPassword = pass;
};

function copyPassword() {
  alert('Senha copiada com sucesso!!!');
  navigator.clipboard.writeText(newPassword);
}

sliderElement.addEventListener("input", function () {
  sizePassword.innerHTML = this.value;
});

buttonElement.addEventListener("click", generatePassword);
containerPassword.addEventListener("click", copyPassword);