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

// document.getElementById("inscription").addEventListener("click", function (fillform) {
//   fillform.preventDefault();
// });

//validation submit
/*document.getElementById("keepform").value = getSavedValue ("keepform");

function getSavedValue(e){
  var id = e.id;  
  var val = e.value;  
  localStorage.setItem(id, val);
}*/


//validation du formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
const emailValid = document.getElementById("email");
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const birthValid = document.getElementById("birthdate");
const quantityCity = document.getElementById("quantity");
const checkBox = document.getElementById("checkbox1");
const submitbtn = document.getElementById ("btnsubmit");
const error = document.getElementById("error");

// All error labels
const errorLabelFirst = document.getElementById('errorLabelFirst');
const errorLabelLast = document.getElementById('errorLabelLast');
const errorLabelMail = document.getElementById('errorLabelMail');
const errorLabelBirth = document.getElementById('errorLabelBirth');

function validateForm() {
  event.preventDefault();

  console.log(firstName.value.length)
  if (!firstName.value || firstName.value.length<2){
    errorLabelFirst.style.display = 'block';
  } else {
    errorLabelFirst.style.display = 'none';
  }

  if (!lastName.value || lastName.value.length<2){ 
    errorLabelFirst.style.display = 'block';
  } else {
    errorLabelFirst.style.display = 'none';
  }

  if (!emailRegex.test(emailValid.value)) {
    errorLabelMail.style.display = 'block';
  } else {
    errorLabelMail.style.display = 'none';
  }

  if (!birthValid.value){
    errorLabelBirth.style.display = 'block';
  } else {
    errorLabelBirth.style.display = 'none';
  }

  if (!quantityCity.checked) {
    // error ="Vous devez choisir une option";
  }

  if (!checkBox.checked) {
    // error ="Vous devez choisir une option";
  }

  // alert('Merci ! Votre réservation a été reçue');
  // return confirm ("Vous devez vérifier que vous acceptez les termes et conditions ");
}

//écouter la modification de l'email
// emailValid.addEventListener('change', function() {
//   emailValid(this);
// });


// form = document.getElementById("inscription");
// form.email.addEventListener('change', function(){
//   validEmail(this);
// });

// const inputEmail = document.querySelector(".email");
// let small = email.nextElementSibling;

// if ('emailValid = emailRegex'){
//   small.innerHTML = 'Adresse valide';
// } else {
//   small.innerHTML = "Adresse non valide";
// }

// let testEmail = emailRegex.test(inputEmail.value);

// console.log(testEmail);