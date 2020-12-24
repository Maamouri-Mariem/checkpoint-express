var express = require("express");
var app = express();
/* app.use('/static', express.static('public')) */
var path = require("path");
let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let ho = date_ob.getHours();
let ho1 = date_ob.getDay();

console.log(year + "-" + month + "-" + date + " " + ho + " " + ho1);
if (ho1 == 6 || ho1 == 7 || (ho > 9 && ho < 17)) {
  app.get("/", function (req, res) {
    res.redirect("/Homepage");
  });
  app.get("/Homepage", function (req, res) {
    res.sendFile(__dirname + "/homepage.html");
  });
  app.get("/Servicespage", function (req, res) {
    res.sendFile(__dirname + "/service.html");
  });
  app.get("/contactpage", function (req, res) {
    res.sendFile(__dirname + "/contact.html");
  });
} else {
  app.get("/", function (req, res) {
    res.send("not working");
  });
}
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
module.exports = app;
