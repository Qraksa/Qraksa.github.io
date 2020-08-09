const form = document.getElementById("form");
const username = document.getElementById("username");
const Lastname = document.getElementById("Nazwisko");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const LastnameValue = Lastname.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "To pole nie może być puste");
  } else {
    setSuccessFor(username);
  }

  if (LastnameValue === "") {
    setErrorFor(Lastname, "To pole nie może być puste");
  } else {
    setSuccessFor(Lastname);
  }

  if (emailValue === "") {
    setErrorFor(email, "To pole nie może być puste");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Niepoprawny adres E-mail");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "To pole nie może być puste");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
