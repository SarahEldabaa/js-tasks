const express = require("express");
const app = express();

app.get("/part3/home.html", function (req, res) {
  res.send("<h1 style='color:red'>welcome to home page</h1>");
});

app.listen(3000, function () {
  console.log("server started");
});
