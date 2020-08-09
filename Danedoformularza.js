const form = document.getElementById("form");
const username = document.getElementById("username");
const Lastname = document.getElementById("Nazwisko");
const email = document.getElementById("email");
const password = document.getElementById("password");

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
  } else if (!isTelefon(passwordValue)) {
    setErrorFor(password, "Niepoprawny Numer Telefonu");
  } else {
    setSuccessFor(password);
  }
  var usernamecheck = username.parentNode.className;
  var Lastnamecheck = Lastname.parentNode.className;
  var emailcheck = email.parentNode.className;
  var passwordcheck = password.parentNode.className;
  console.log(usernamecheck);
  var Dalej = document.getElementById("dalejdostawa");
  if (
    usernamecheck == "form-control2 success" &&
    Lastnamecheck == "form-control2 success" &&
    emailcheck == "form-control2 success" &&
    passwordcheck == "form-control2 success"
  ) {
    Dalej.addEventListener("click", function () {
      var container = document.getElementById("container");
      container.style.display = "none";
      var container2 = document.getElementById("container2");
      container2.style.display = "block";
    });
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

/*Dostawa*/

const form2 = document.getElementById("form2");
const Kraj = document.getElementById("Kraj");
const Miasto = document.getElementById("Miasto");
const Kodpocztowy = document.getElementById("Kod pocztowy");
const Ulicainumerbudynku = document.getElementById("Ulica i numer budynku");

form2.addEventListener("submit", (i) => {
  i.preventDefault();

  checkInput();
});

function checkInput() {
  const KrajValue = Kraj.value.trim();
  const MiastoValue = Miasto.value.trim();
  const KodpocztowyValue = Kodpocztowy.value.trim();
  const UlicainumerbudynkuValue = Ulicainumerbudynku.value.trim();

  if (KrajValue === "") {
    setErrorFor(Kraj, "To pole nie może być puste");
  } else {
    setSuccessFor(Kraj);
  }

  if (MiastoValue === "") {
    setErrorFor(Miasto, "To pole nie może być puste");
  } else {
    setSuccessFor(Miasto);
  }

  if (KodpocztowyValue === "") {
    setErrorFor(Kodpocztowy, "To pole nie może być puste");
  } else if (!isKodpocztowy(KodpocztowyValue)) {
    setErrorFor(Kodpocztowy, "Niepoprawny kod pocztowy");
  } else {
    setSuccessFor(Kodpocztowy);
  }

  if (UlicainumerbudynkuValue === "") {
    setErrorFor(Ulicainumerbudynku, "To pole nie może być puste");
  } else {
    setSuccessFor(Ulicainumerbudynku);
  }
}

function setErrorFor(input, message) {
  const formControl2 = input.parentElement;
  const small = formControl2.querySelector("small");
  formControl2.className = "form-control2 error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl2 = input.parentElement;
  formControl2.className = "form-control2 success";
}

function isKodpocztowy(Kodpocztowy) {
  return /^((\d){2})-((\d){3})$/.test(Kodpocztowy);
}

function isTelefon(password) {
  return /(^((\d){3})-((\d){3})-((\d){3})$)|(^((\d){3})((\d){3})((\d){3})$)|(^((\d){3}) ((\d){3}) ((\d){3})$)/.test(
    password
  );
}
