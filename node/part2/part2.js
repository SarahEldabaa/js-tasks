const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const fun = function (req, res) {
  console.log(req.url);
  fs.readFile("part2/form.html", function (err, data) {
    res.write(data);
    res.end("");
  });

  if (req.method == "POST") {
    let bodyReq = "";
    req.on("data", function (data) {
      bodyReq += data;
    });
    req.on("end", function () {
      let parsedQuery = qs.parse(bodyReq);
      // console.log(parsedQuery);
      // console.log(parsedQuery.password.length);
      res.writeHead(200, { "content-type": "text/html" });
      if (parsedQuery.email !== "") {
        // res.write("<h2 style='color:blue'>Registration success</h2>");
        if (parsedQuery.password.length >= 8) {
          res.write("<h2 style='color:blue'>Registration success</h2>");
        } else {
          res.write(
            "<h2 style='color:red;'>Registration failed , Error password is less than 8 characters.</h2>"
          );
        }
      } else {
        res.write(
          "<h2 style='color:red;'>Registration failed , Error email is empty.</h2>"
        );
      }
      res.end("");
    });
  }
};

const objBack = http.createServer(fun);
objBack.listen(8080);
