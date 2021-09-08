const express = require("express");

const favicon = require('serve-favicon');
var path = require("path");


const app = express();

const port = process.env.PORT || 5000;

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Body Parser Middleware
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({
  extended: false
}))
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

// app.get("/.well-known/pki-validation/starfield.html", (req, res) => {
//   res.sendFile(__dirname + "/.well-known/pki-validation/starfield.html");
// })

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});