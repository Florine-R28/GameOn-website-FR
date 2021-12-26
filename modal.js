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
const modalclose = document.getElementById("close");
const closeForm = document.getElementById("closeForm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close form via cross
function closeModal() {
  modalbg.style.display = "none";
}

modalclose.addEventListener("click", closeModal);

//Form fields validation
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const nameRegex = /^[a-zA-Z\-]+$/; 
const emailValid = document.getElementById("email");
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const birthValid = document.getElementById("birthdate");
const birthRegex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
const quantityCity = document.getElementById("quantity");
const checkboxConditions = document.getElementById("checkboxConditions");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

//Error labels
const errorLabelFirst = document.getElementById("errorLabelFirst");
const errorLabelLast = document.getElementById("errorLabelLast");
const errorLabelMail = document.getElementById("errorLabelMail");
const errorLabelBirth = document.getElementById("errorLabelBirth");
const errorLabelQuantity = document.getElementById("errorLabelQuantity");
const errorLabelCheckbox = document.getElementById("errorLabelCheckbox");
const errorLabelradioButtons = document.getElementById(
  "errorLabelradioButtons"
);
const errorSubmit = document.getElementById("errorSubmit");

//Check all form fields
function validateForm() {
  event.preventDefault();
  let isValidForm = true;

  //names check (firstName x lastName)
  if (!firstName.value || firstName.value.length < 2 || (!nameRegex.test(firstName.value))) {
    errorLabelFirst.style.display = "block";
    isValidForm = false;
  } else {
    errorLabelFirst.style.display = "none";
  }

  if (!lastName.value || lastName.value.length < 2 || (!nameRegex.test(lastName.value))) {
    errorLabelLast.style.display = "block";
    isValidForm = false;
  } else {
    errorLabelLast.style.display = "none";
  }

  //email check
  if (!emailRegex.test(emailValid.value)) {
    errorLabelMail.style.display = "block";
    isValidForm = false;
  } else {
    errorLabelMail.style.display = "none";
  }

  //birthdate check
  if (!birthValid.value || new Date(birthValid.value).getFullYear() < 1920) {
    errorLabelBirth.style.display = "block";
    isValidForm = false;
  } else {
    errorLabelBirth.style.display = "none";
  }

  //number of tournaments check
  if (quantityCity.value < 0 || quantityCity.value > 99) {
    errorLabelQuantity.style.display = "block";
    isValidForm = false;
  } else {
    errorLabelQuantity.style.display = "none";
  }

  //locations check
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

  //checkboxConditions check
  if (!checkboxConditions.checked) {
    errorLabelCheckbox.style.display = "block";
    isValidForm = false;
  } else {
    errorLabelCheckbox.style.display = "none";
  }

  return isValidForm;
}

//send form
document.getElementById("inscription").addEventListener("submit", function () {
  if (validateForm() == true) {
    closeModal();
    alert("Merci ! Votre réservation a été reçue");
  }
});

//empty form
function resetForm () {
  const emptyForm = document.getElementById("inscription");
  emptyForm.reset();
}
