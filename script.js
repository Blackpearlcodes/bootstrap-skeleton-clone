const emailInput = document.getElementById('email');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{3,}+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (!emailInput.value.match(emailRegex)) {
  alert('Invalid email address.');
}



