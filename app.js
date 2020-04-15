const express = require("express");
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");


const app = express();

const port = process.env.PORT || 5000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({
  extended: false
}))
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get("/.well-known/pki-validation/starfield.html", (req, res) => {
  res.sendFile(__dirname + "/.well-known/pki-validation/starfield.html");
})

// app.post('/send', (req, res) => {
//   const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//       <ul>
//       <li>Name: ${req.body.name}</li>
//       <li>Name: ${req.body.email}</li>
//       </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;
//   let testAccount = nodemailer.createTestAccount();
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });

//   // send mail with defined transport object
//   let info = transporter.sendMail({
//     from: '"Nodemailer" <dirttribute@gmail.com>', // sender address
//     to: "dirttribute@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     html: output // plain text body

//   });
//   console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

//   res.sendFile(__dirname + "/index.html");

// })

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});