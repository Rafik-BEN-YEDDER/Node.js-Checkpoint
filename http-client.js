const http = require("http");

function a() {
  http.get(process.argv[2], (response) => {
    response
      .on("data", (data) => {
        console.log(data);
      })
      .setEncoding("utf8");
  });
}

a();
