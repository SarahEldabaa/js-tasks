const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let errMsg = "";
let succMsg = "";
app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded());

let users = [];
let lastIndex = users.length;
app.get("/users", function (req, res) {
  errMsg = "";
  succMsg = "";
  res.render("users.ejs", {
    users: users,
    errMsg: errMsg,
    succMsg: succMsg
  });
});

app.post("/adduser", function (req, res) {
  errMsg = "";
  succMsg = "";
  if (
    req.body.email !== "" &&
    req.body.password !== "" &&
    req.body.name !== ""
  ) {
    if (req.body.password.length >= 8) {
      req.body.id = ++lastIndex;
      users.push(req.body);
      succMsg = "Registration success";
    } else {
      errMsg = "Password must be at least 8 characters.";
    }
  } else {
    errMsg = "Please fill all inputs, All inputs are required.";
  }
  res.render("users.ejs", {
    users: users,
    errMsg: errMsg,
    succMsg: succMsg
  });
});

app.listen(8080);
