const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorMessage = document.querySelector('.errorsMsg');
const lastNameErrorMsg = document.querySelector('.lastNameErrors');
const emailErrorMsg = document.querySelector('.emailErrors');
const passwordError = document.querySelector('.passwordErrors');
const iconError = document.querySelector('.icon-error');
const lastNameIcon  = document.querySelector('.lastName-Icon');
const emailIcon = document.querySelector('.email-Icon');
const passwordIcon = document.querySelector('.password-Icon');
const eyeIcon = document.querySelector('.hide-show');
const passwordInput = document.querySelector('.password');


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorMessage.innerHTML = "First Name cannot be empty";
    iconError.classList.remove('img');
    firstName.placeholder = '';
   
    /* errorMessage.classList.add('.errors'); */
  } 
  else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastNameErrorMsg.innerHTML = "Last Name cannot be empty";
    lastName.placeholder = '';
    lastNameIcon.classList.remove('img');
  } 
  else {
    lastName.classList.remove('error');
  }

  
  // Check email
 

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailErrorMsg.innerHTML = "Looks like this is not an email";
    email.placeholder = 'email@example/com';
    email.classList.add('new-placeholder');
    emailIcon.classList.remove('img');
  } 
  else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.innerHTML = "Password cannot be empty";
    password.placeholder = '';
    passwordIcon.classList.remove('img');
    eyeIcon.classList.remove('hide-show');
  } 
  else {
    password.classList.remove('error');
  }
});

// HIDE AND SHOW PASSWORD
eyeIcon.addEventListener("click", function ()  {
  const type= passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  this.classList.toggle('bx-show');
  this.classList.toggle('bx-hide');
})


//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

