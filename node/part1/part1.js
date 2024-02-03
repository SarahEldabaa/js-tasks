const http = require("http");
const fs = require("fs");

// const fun = function (req, res) {
//   console.log(req.url);
//   if (req.url == "/part1/index.html") {
//     res.writeHead(200, "attempt", "success");
//     fs.readFile("part1/index.html", function (err, data) {
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url == "/part1/about.html") {
//         res.writeHead(200, "attempt", "success");
//     fs.readFile("part1/about.html", function (err, data) {
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url == "/part1/contact.html") {
//         res.writeHead(200, "attempt", "success");
//     fs.readFile("part1/contact.html", function (err, data) {
//       res.write(data);
//       res.end();
//     });
//   } else {
//     res.writeHead(404);
//     res.end("error");
//   }
// };

const fun = function (req, res) {
  function search(pathfile, status, hname, hvalue) {
    fs.readFile(pathfile, function (err, data) {
      res.writeHead(status, hname, hvalue);
      res.write(data);
      res.end("");
    });
  }
  if (req.url == "/index.html") {
    search("part1/index.html", 200, "attempt", "success");
  } else if (req.url == "/about.html") {
    search("part1/about.html", 200, "attempt", "success");
  } else if (req.url == "/contact.html") {
    search("part1/contact.html", 200, "attempt", "success");
  } else {
    search("part1/404.html", 404, "attempt", "failed");
    res.end("error");
  }
};

const objBack = http.createServer(fun);

objBack.listen(8080);
