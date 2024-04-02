const form = document.querySelector("form");
const button = document.querySelector("button");
const modal = document.querySelector(".modalWrapper");
let validation = [0, 0, 0, 0, 0];
const error = [
  document.querySelector(".error_name"),
  document.querySelector(".error_email"),
  document.querySelector(".error_age"),
  document.querySelector(".error_password"),
  document.querySelector(".error_check"),
];
const valid = [
  document.querySelector(".valid_name"),
  document.querySelector(".valid_email"),
  document.querySelector(".valid_age"),
  document.querySelector(".valid_password"),
  document.querySelector(".valid_check"),
];
let user = {
  name: "",
  email: "",
  age: NaN,
  password: "",
  check: "",
};

function isValidPw(str) {
  let pw = str;
  let spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  let num = pw.search(/[0-9]/g);
  let eng = pw.search(/[a-z]/gi);
  if (pw.length < 4 || pw.length > 12) {
    return false;
  }
  if (pw.search(/₩s/) != -1) {
    return false;
  }
  if (num < 0 || eng < 0 || spe < 0) {
    return false;
  }
  return true;
}

function isValid() {
  if (user.name === "") {
    error[0].style.display = "flex";
    valid[0].style.display = "none";
    validation[0] = 0;
  } else {
    error[0].style.display = "none";
    valid[0].style.display = "flex";
    validation[0] = 1;
  }
  if (!user.email.includes("@")) {
    error[1].style.display = "flex";
    valid[1].style.display = "none";
    validation[1] = 0;
  } else {
    error[1].style.display = "none";
    valid[1].style.display = "flex";
    validation[1] = 1;
  }
  if (user.age > 19) {
    error[2].style.display = "none";
    valid[2].style.display = "flex";
    validation[2] = 1;
  } else {
    error[2].style.display = "flex";
    valid[2].style.display = "none";
    validation[2] = 0;
  }
  if (isValidPw(user.password)) {
    error[3].style.display = "none";
    valid[3].style.display = "flex";
    validation[3] = 1;
  } else {
    error[3].style.display = "flex";
    valid[3].style.display = "none";
    validation[3] = 0;
  }
  if (user.check === user.password && user.check.length >= 4) {
    error[4].style.display = "none";
    valid[4].style.display = "flex";
    validation[4] = 1;
  } else {
    error[4].style.display = "flex";
    valid[4].style.display = "none";
    validation[4] = 0;
  }
  if (validation.reduce((a, b) => a + b, 0) == 5) {
    modal.style.display = "flex";
  }
}

function onSubmit(e) {
  e.preventDefault();
  user.name = form[0].value;
  user.email = form[1].value;
  user.age = parseInt(form[2].value);
  user.password = form[3].value;
  user.check = form[4].value;
  isValid();
}

button.addEventListener("click", () => {
  modal.style.display = "none";
  window.location.reload();
});
form.addEventListener("submit", onSubmit);
