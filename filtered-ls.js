var fs = require("fs");
var path = require("path");

function a() {
  fs.readdir(process.argv[2], (err, list) => {
    if (err) return console.error(err);
    list.forEach((file) => {
      if (path.extname(file) === "." + process.argv[3]) {
        console.log(file);
      }
    });
  });
}
a();
