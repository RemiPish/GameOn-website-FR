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
const successModal = document.getElementById("successModal");

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const dateBirth = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

const condition = document.getElementById("checkbox1");
const submitButton = document.getElementById("btn-submit");

first.addEventListener("input", validate);
last.addEventListener("input", validate);
email.addEventListener("input", validate);
dateBirth.addEventListener("input", validate);
quantity.addEventListener("input", validate);
condition.addEventListener("input", validate);
location1.addEventListener("input", validate);
location2.addEventListener("input", validate);
location3.addEventListener("input", validate);
location4.addEventListener("input", validate);
location5.addEventListener("input", validate);
location6.addEventListener("input", validate);
const errormessages = {
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
  submitButton.disabled = true;
}

function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

function firstValidator() {
  if (first.value == "" || first.value.length <= 2) return false;
  return true;
}

function lastValidator() {
  if (last.value == "" || last.value.length <= 2) return false;
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
  return quantity.value.match(/^\d{1,2}$/);
}

function dateBirthValidator() {
  let date = new Date(dateBirth.value);
  if (date.getDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }

  return false;
}

function conditionValidator() {
  return condition.checked;
}

function validate() {
  let isValid = true;

  if (!firstValidator()) {
    if (first.value != "") showError(first, errormessages["nameInvalid"]);
    isValid = false;
  } else hideError(first);

  if (!lastValidator()) {
    if (last.value != "") showError(last, errormessages["nameInvalid"]);
    isValid = false;
  } else hideError(last);

  if (!emailValidator()) {
    if (email.value != "") showError(email, errormessages["emailInvalid"]);
    isValid = false;
  } else hideError(email);

  if (!quantityValidator()) {
    if (quantity.value != "")
      showError(quantity, errormessages["quantityInvalid"]);
    isValid = false;
  } else hideError(quantity);

  if (!dateBirthValidator()) {
    if (dateBirth.value != "")
      showError(dateBirth, errormessages["dateBirthInvalid"]);
    isValid = false;
  } else hideError(dateBirth);

  const locationCheck = document.querySelectorAll("input[type=radio]:checked");
  if (locationCheck.length === 0) {
    showError(location1, errormessages["locationInvalid"]);
    isValid = false;
  } else hideError(location1);

  if (!conditionValidator()) {
    showError(condition, errormessages["conditionInvalid"]);
    isValid = false;
  } else hideError(condition);
  if(!isValid) submitButton.disabled= true;
  else submitButton.disabled= false;
}

function showError(form, message) {
  form.parentElement.dataset.errorVisible = "true";
  form.parentElement.dataset.error = message;
}
function hideError(form) {
  form.parentElement.dataset.errorVisible = "false";
}

function showSuccess() {
  /*formData.style.display = "none";
  successModal.style.display = "block";*/
}
