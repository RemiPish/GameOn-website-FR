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
const locationList = document.querySelectorAll(
  "checkbox-input[type=radio]:checked"
);
const condition = document.getElementById("checkbox1");

const errorMessageArray = {
  nameLength: "Veuillez entrer 2 caractères ou plus.",
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
