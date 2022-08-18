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

//bouton fermer
const closeBtn = document.querySelector(".close");

//modal du succes apres le formulaire valide
const successModal = document.getElementById("successModal");

//formulaire champ prenom
const first = document.getElementById("first");
//formulaire champ nom
const last = document.getElementById("last");
//formulaire champ adresse mail
const email = document.getElementById("email");
//formulaire champ date de naissance
const dateBirth = document.getElementById("birthdate");
//formulaire champ nombre de fois
const quantity = document.getElementById("quantity");

//formulaire champs lieux
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

//formulaire checkbox conditions d'utilisation
const condition = document.getElementById("checkbox1");

//bouton soumettre formulaire
const submitButton = document.getElementById("btn-submit");

//bouton croix qui ferme le modal formulaire
const fermerButton = document.querySelector(".fermer-btn");


//fonctions ecoutant les changements input et blur sur les champs du formulaire pour valider, affiche ou cache le message d'erreur
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


//lors qu'on reussit a soumettre un formulaire valide, le modal de succes s'affiche
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  successModal.style.display = "flex";
  successModal.style.visibility = "visible";
});

//message erreur
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
  validate();
}

//ferme la modale
function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
fermerButton.addEventListener("click", closeModal);

//champ prenom invalide si vide ou moins de 3 caracteres
function firstValidator() {
  if (first.value == "" || first.value.length <= 2) return false;
  return true;
}

//champ nom invalide si vide ou moins de 3 caracteres
function lastValidator() {
  if (last.value == "" || last.value.length <= 2) return false;
  return true;
}

//champ mail invalide si ce n'est pas une adresse mail
function emailValidator() {
  return email.value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

//champ nombre de fois valide si c'est un nombre entre 0 et 99
function quantityValidator() {
  return quantity.value.match(/^\d{1,2}$/);
}

//champ date de naissance valide si la date entree a plus de 18 ans
function dateBirthValidator() {
  if (dateBirth.value === "") return false;
  else {
    const db = new Date(dateBirth.value);
    const year18 = new Date();
    year18.setFullYear(year18.getFullYear() - 18);
    return db.getTime() <= year18.getTime();
  }
}

//valide si le checkbox est rempli
function conditionValidator() {
  return condition.checked;
}

//fonction pour valider le formulaire qui verifie les ville en derniere au cas ou tous les autres champs sont valide
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
  } else {
    submitButton.disabled = true;
  }
}

//affiche les messages d'erreurs sous chaque champ respectif
function showError(form, message) {
  form.parentElement.dataset.errorVisible = "true";
  form.parentElement.dataset.error = message;
}

//cache les messages d'erreurs 
function hideError(form) {
  form.parentElement.dataset.errorVisible = "false";
}
