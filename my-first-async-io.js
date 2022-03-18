var fs = require("fs");

function a() {
  fs.readFile(process.argv[2], "utf8", (err, fileContents) => {
    err ? console.log(err) : console.log(fileContents.split("\n").length - 1);
  });
}
a();
