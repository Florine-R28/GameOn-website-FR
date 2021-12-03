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

/*document.getElementById("inscription").addEventListener("click", function (fillform) {
  fillform.preventDefault();
})*/

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
const emailRegex = ("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+?:\.[a-zA-Z0-9-]+*$/", 'g');
const birthValid = document.getElementById("birthdate");
const quantityCity = document.getElementById("quantity");
const checkBox = document.getElementById("checkbox1");
const submitbtn = document.getElementById ("btnsubmit");
const error = document.getElementById("error");

/*function validateForm () {
  if (!firstName.value && firstName.lenght<2){
    error ="Veuillez entrer 2 caractères ou plus pour le champ du prénom";
  }

  if (!lastName.value && lastName.lenght<2){ 
    error ="Veuillez entrer 2 caractères ou plus pour le champ du nom";
  }

  if (!emailValid.value.matchemailRegex) {
    error ="Veuillez entrer une adresse valide. Exemple : contact@nom.com";
  } 

  if (!birthValid.value){
    error ="Vous devez entrer votre date de naissance";
  }

  if (!quantityCity.checked) {
    error ="Vous devez choisir une option";
  }

  if (!checkBox.checked) {
    error ="Vous devez choisir une option";
  }

  if (error) {
    document.getElementById("error").innerHTML = "error" ;
    return false;
  }

  else {
    return confirm ("Vous devez vérifier que vous acceptez les termes et conditions ");
  }
}

// message de confirmation 
document.getElementById("inscription").addEventListener("submit", function () {
  alert('Merci ! Votre réservation a été reçue');
})*/

//écouter la modification de l'email
emailValid.addEventListener('change', function() {
  emailValid(this);
});


form = document.getElementById("inscription");
form.email.addEventListener('change', function(){
  validEmail(this);
});

const inputEmail = document.querySelector(".email");
let small = email.nextElementSibling;

if ('emailValid = emailRegex'){
  small.innerHTML = 'Adresse valide';
} else {
  small.innerHTML = "Adresse non valide";
}

let testEmail = emailRegex.test(inputEmail.value);

console.log(testEmail);