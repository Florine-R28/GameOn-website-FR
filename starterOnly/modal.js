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

//keep the form open if it is not completed
document.getElementById("inscription").addEventListener("click", function (fillform) {
  fillform.preventDefault();
})

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
const emailValid = document.getElementById("email");
const emailRegex = ("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+?:\.[a-zA-Z0-9-]+*$/", 'g');
const birthValid = document.getElementById("birthdate");
const quantityCity = document.getElementById("quantity");
const checkBox = document.getElementById("checkbox1");
const submitbtn = document.getElementById ("btnsubmit");
const error = document.getElementById("error");

function validateForm() {
  let hasError = false;

  if (text.firstName.checked = true && text.firstName.lenght<2){
    //error ="Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    const inputFisrt = document.getElementById('errorLabelFirst');
    inputFisrt.style.display = 'block';
    console.log ('test')
    hasError = true;
  }

  if (!lastName.value && lastName.lenght<2){ 
    //error ="Veuillez entrer 2 caractères ou plus pour le champ du nom";
    const inputLast = document.getElementById('errorLabelLast');
    inputLast.style.display = 'block';
    hasError = true;
  }

  if (!emailRegex.test(emailValid.value)){
    const inputEmail = document.getElementById('errorLabelMaiL');
    //error ="Veuillez entrer une adresse valide. Exemple : contact@nom.com";
    inputEmail.style.display = 'block';
    hasError = true; 
  } 

  if (!birthValid.value){
    //error ="Vous devez entrer votre date de naissance";
    const inputBirthdate = document.getElementById('errorLabelBirth');
    inputBirthdate.style.display = 'block';
    hasError = true;
  }

  if (!quantityCity.checked) {
    //error ="Vous devez choisir une option";
    const inputQuantity = document.getElementById('errorLabelQuanity');
    inputQuantity.style.display = 'block';
    hasError = true;
  }

  if (!checkBox.checked) {
    //error ="Vous devez vérifier que vous acceptez les termes et conditions";
    const inputCheckbox = document.getElementById('errorLabelCheckbox');
    inputCheckbox.style.display = 'block';
    hasError = true;
  }

  if (error) {
    small.innerHTML = "error" ;
    hasError = true; 
  }

  if (hasError) {
    return false;
  } else {
    alert('Merci ! Votre réservation a été reçue');
  }
return false;
}


/*écouter la modification de l'email
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

console.log(testEmail);*/