function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const login = {
    username: username,
    password: password,
  };

  if (login.username === "admin" && login.password === "123") {
    showResult("Welcome!");
  } else {
    showResult("Not registered.");
  }
}

function showResult(message) {
  const result = document.getElementById("result");
  result.textContent = message;
}
