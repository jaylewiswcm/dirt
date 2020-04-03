const express = require("express");
// const mongoose = require("mongoose");

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

const uri = "mongodb://dirtAdmin:admin123@ds247047.mlab.com:47047/video-sources";

// mongoose.connect(
//   uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// )
// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection successful");
// })

// app.get("/fetch", function (req, res) {
//   const collection = db.collection("video-sources");
//   collection.find({}, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   })
// });


app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`App is listening to ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})