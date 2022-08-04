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
const form = document.querySelector("form");
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
const fermerButton = document.querySelector(".fermer-btn");

first.addEventListener("input", () => {
  if (!firstValidator()) showError(first, errormessages["nameInvalid"]);
  else hideError(first);
  validate();
});

last.addEventListener("input", () => {
  if (!lastValidator()) showError(last, errormessages["nameInvalid"]);
  else hideError(last);
  validate();
});

email.addEventListener("input", () => {
  if (!emailValidator()) showError(email, errormessages["emailInvalid"]);
  else hideError(email);
  validate();
});
dateBirth.addEventListener("blur", () => {
  if (!dateBirthValidator()) {
    showError(dateBirth, errormessages["dateBirthInvalid"]);
  } else hideError(dateBirth);
  validate();
});

quantity.addEventListener("input", () => {
  if (!quantityValidator())
    showError(quantity, errormessages["quantityInvalid"]);
  else hideError(quantity);
  validate();
});

condition.addEventListener("input", () => {
  if (!conditionValidator())
    showError(condition, errormessages["conditionInvalid"]);
  else hideError(condition);
  validate();
});

location1.addEventListener("click", () => {
  validate();
});
location2.addEventListener("click", () => {
  validate();
});
location3.addEventListener("click", () => {
  validate();
});
location4.addEventListener("click", () => {
  validate();
});
location5.addEventListener("click", () => {
  validate();
});
location6.addEventListener("click", () => {
  validate();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  successModal.style.display = "flex";
  successModal.style.visibility = "visible";
});

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
fermerButton.addEventListener("click", closeModal);

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
  if (dateBirth.value === "") return false;
  else {
    const db = new Date(dateBirth.value);
    const year18 = new Date();
    year18.setFullYear(year18.getFullYear() - 18);
    return db.getTime() <= year18.getTime();
  }
}

function conditionValidator() {
 
  return condition.checked;
}

function validate() {
  if (
    firstValidator() &&
    lastValidator() &&
    emailValidator() &&
    dateBirthValidator() &&
    quantityValidator() &&
    conditionValidator()
  ) {
    const locationCheck = document.querySelectorAll(
      "input[type=radio]:checked"
    );
    if (locationCheck.length === 0) {
      showError(location1, errormessages["locationInvalid"]);
    } else {
      hideError(location1);
      submitButton.disabled = false;
    }
  } else{
    console.log('REEE')
    submitButton.disabled = true;
  } 
}

function showError(form, message) {
  form.parentElement.dataset.errorVisible = "true";
  form.parentElement.dataset.error = message;
}
function hideError(form) {
  form.parentElement.dataset.errorVisible = "false";
}
