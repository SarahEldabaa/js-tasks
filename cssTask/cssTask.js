const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

if (localStorage.getItem("email")) {
  emailInput.value = localStorage.getItem("email");
}
if (localStorage.getItem("password")) {
  passwordInput.value = localStorage.getItem("password");
}

// Save email and password in local storage on form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate the form inputs
  const isValid = this.checkValidity();
  this.reportValidity();

  if (isValid) {
    // Save the email and password in local storage
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
  }
});
