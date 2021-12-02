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
const submitbtn = document.getElementById ("btnsubmit")

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

document.getElementById("inscription").addEventListener("click", function (fillform) {
  fillform.preventDefault();
}
)

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

function show_alert () {
  alert ("xxxxx");
}

function validateForm () {
  if (firstName.value == ""){
    alert ("Veuillez entrer 2 caractères ou plus pour le champ du nom");
    return false;
  }

  if (lastName.value == ""){ 
    alert ("Veuillez entrer 2 caractères ou plus pour le champ du nom");
    return false;
  }

  if (!emailValid.value.matchemailRegex) {
    alert ("Entrez une adresse valide. Exemple : contact@nom.com");
    return false;
  } 
  
  let testEmail= emailRegex.test (emailValid.value);

  console.log(testEmail);

  if (birthdate.value == ""){
    alert ("Entrez votre date de naissance");
    return false;
  }

  if (!quantityCity.checked) {
    alert ("Vous devez renseigner ce champ.");
    return false;
  }

  if (!checkBox.checked) {
    alert ("Vous devez renseigner ce champ.");
    return false;
  }  

  else {
    return confirm ("Etes-vous sûr de valider votre choix ?");
  }
}

let form = document.getElementById ("loginForm");

console.log(form.email);

/*if (!emailValid.value == "emailRegex") {
  alert ("Entrez une adresse valide. Exemple : contact@nom.com");
  return false;
} 

let testEmail= emailRegex.test (emailValid.value);

console.log(testEmail);*/

