const http = require("http");
const bl = require("bl");
let i = 2;
while (i < 5){
  http.get(process.argv[i], (response) => {
    response.pipe(
      bl((err, data) => {
        if (err) return console.log(err);
        console.log(data.toString().length);
        console.log(data.toString());
      })
    );
    response.on("end", i++);
 
});
}
