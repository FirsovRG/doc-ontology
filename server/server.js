const express = require("express");
const helpers = require("./helpers");
const dirTree = require("directory-tree");

const tree = dirTree(`${__dirname}/documents`);

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/documents", function (request, response) {
  const docsHierarchy = tree.children.map(helpers.parseTree);
  response.send(docsHierarchy);
});

app.listen(8080, function () {
  console.log("App listening on port 8080");
});
