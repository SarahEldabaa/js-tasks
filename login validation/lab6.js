function login() {
  const username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  const login = {
    username: username,
    password: password,
  };
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  function validatePassword(password) {
    // Regular expression to enforce password rules

    // Test if the password meets the criteria
    const isValid = passwordRegex.test(password);

    return isValid;
  }

  if (!validatePassword(password)) {
    showResult(
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
    );
    return;
  } else {
    showResult("Welcome!");
  }

  // if (login.username === "admin" && login.password == passwordRegex) {
  //   showResult("Welcome!");
  // }else {
  //   showResult("Not registered.");
  // }
}

function showResult(message) {
  const result = document.getElementById("result");
  result.textContent = message;
}
