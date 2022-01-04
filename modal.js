function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function isValidDate(d)  {
  let todayDate = new Date(); //today date
  let date = new Date().setFullYear(todayDate.getFullYear()-18); //just for adults
  let oldDate = new Date().setFullYear(todayDate.getFullYear()-100); //100 in the past
  return d instanceof Date && !isNaN(d) && d<=date && d>oldDate ; 
}
 
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.getElementById("close");
const closeForm = document.getElementById("closeForm");

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close form via cross
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal form
modalclose.addEventListener("click", closeModal);

// Form fields validation
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const nameRegex = /^[a-zA-Z\-]+$/; 
const emailValid = document.getElementById("email");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const birthValid = document.getElementById("birthdate");
const quantityCity = document.getElementById("quantity");
const checkboxConditions = document.getElementById("checkboxConditions");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

// Error labels
const errorLabelFirst = document.getElementById("errorLabelFirst");
const errorLabelLast = document.getElementById("errorLabelLast");
const errorLabelMail = document.getElementById("errorLabelMail");
const errorLabelBirth = document.getElementById("errorLabelBirth");
const errorLabelQuantity = document.getElementById("errorLabelQuantity");
const errorLabelCheckbox = document.getElementById("errorLabelCheckbox");
const errorLabelradioButtons = document.getElementById("errorLabelradioButtons");
const errorSubmit = document.getElementById("errorSubmit");

// Input for change color border
const inputFirstName = document.getElementById("first");
const inputLastName = document.getElementById("last");
const inputEmailValid = document.getElementById("email");
const inputBirthValid = document.getElementById("birthdate");
const inputQuantityCity = document.getElementById("quantity");

// Check all form fields
function validateForm() {
  event.preventDefault();
  let isValidForm = true;

  //Names check (firstName x lastName)
  if (!firstName.value || firstName.value.length < 2 || (!nameRegex.test(firstName.value))) {
    errorLabelFirst.style.display = "block";
    inputFirstName.style.borderColor = "red"; 
    isValidForm = false;
  } else {
    errorLabelFirst.style.display = "none";
    inputFirstName.style.borderColor = "#ccc"; 
  }

  if (!lastName.value || lastName.value.length < 2 || (!nameRegex.test(lastName.value))) {
    errorLabelLast.style.display = "block";
    inputLastName.style.borderColor = "red"; 
    isValidForm = false;
  } else {
    errorLabelLast.style.display = "none";
    inputLastName.style.borderColor = "#ccc"; 
  }

  // Email check
  if (!emailRegex.test(emailValid.value)) {
    errorLabelMail.style.display = "block";
    inputEmailValid.style.borderColor = "red"; 
    isValidForm = false;
  } else {
    errorLabelMail.style.display = "none";
    inputEmailValid.style.borderColor = "#ccc"; 
  }

  // Birthdate check
  if (!birthValid.value || !isValidDate(new Date(birthValid.value))) {
    errorLabelBirth.style.display = "block";
    inputBirthValid.style.borderColor = "red"; 
    isValidForm = false;
  } else {
    errorLabelBirth.style.display = "none";
    inputBirthValid.style.borderColor = "#ccc"; 
  }

  // Number of tournaments check
  if (!quantityCity.value || quantityCity.value < 0 || quantityCity.value > 99) {
    errorLabelQuantity.style.display = "block";
    inputQuantityCity.style.borderColor = "red"; 
    isValidForm = false;
  } else {
    errorLabelQuantity.style.display = "none";
    inputQuantityCity.style.borderColor = "#ccc"; 
  }

  // Locations check
  const radioButtons = document.getElementsByName("location");
  let areValidRadioButtons = false;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      areValidRadioButtons = true;
    }
  }

  if (!areValidRadioButtons /*=== false*/) {
    errorLabelradioButtons.style.display = "block";
    isValidForm = false;
  } else {
    errorLabelradioButtons.style.display = "none";
  }

  // CheckboxConditions check
  if (!checkboxConditions.checked) {
    errorLabelCheckbox.style.display = "block";
    isValidForm = false;
  } else {
    errorLabelCheckbox.style.display = "none";
  }
  
  return isValidForm;
}

// Send form x empty it
document.getElementById("inscription").addEventListener("submit", function () {
  if (validateForm() == true) {
    closeModal();
    alert("Merci ! Votre réservation a été reçue");
    document.getElementById("inscription").reset();
  }
});
