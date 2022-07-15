function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const dateBirth = document.getElementById("datebirth");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const locationList = document.querySelectorAll(
  "checkbox-input[type=radio]:checked"
);
const condition = document.getElementById("checkbox1");

const errorMessageArray = {
  nameInvalid: "Veuillez entrer 2 caractères ou plus.",
  emailInvalid: "Veuillez entrer une adresse mail valide.",
  dateBirthInvalid: "Veuillez entrer une date de naissance valide.",
  quantityInvalid: "Veuillez entrer un nombre valide.",
  locationInvalid: "Veuillez selectionner une ville.",
  conditionInvalid: "Veuilez accepter les conditions d'utilisation.",
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

function firstValidator() {
  if (first.value == null || first.value.length > 2) return false;
  return true;
}

function lastValidator() {
  if (last.value == null || last.value.length > 2) return false;
  return true;
}

function emailValidator() {
  return email.value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function quantityValidator() {
  let num = quantity.value;
  if (!isNaN(num) && num % 1 === 0 && num >= 0 && num <= 99) return true;
  return false;
}

function dateBirthValidator() {
  let date = new Date(dateBirth.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
}

function locationValidator() {
  if (locationList != null) return true;
  return false;
}

function conditionValidator() {
  return condition.checked;
}

function submit() {
  if (!firstValidator()) {
    showError(first, errorMessageArray["nameInvalid"]);
  } else if (!lastValidator()) {
    showError(last, errorMessageArray["nameInvalid"]);
  } else if (!emailValidator()) {
    showError(email, errorMessageArray["emailInvalid"]);
  } else if (!quantityValidator()) {
    showError(quantity, errorMessageArray["quantityInvalid"]);
  } else if (!locationValidator()) {
    showError(location1, errorMessageArray["locationInvalid"]);
  } else if (!conditionValidator()) {
    showError(condition, errorMessageArray["conditionInvalid"]);
  }
}
