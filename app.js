const express = require("express");
const app = express();
const mongoose = require("mongoose");

connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

connection.on("error", function (e) {
  console.error(e);
});

var articleSchema = mongoose.Schema({
  title: String,
  body: String,
  published: { type: Boolean, default: false },
});

var Article = mongoose.model("Article", articleSchema);

var first = new Article({ title: "Artículo 1", body: "Cuerpo del artículo" });
first.save(function (err) {
  if (err) return console.error(err);
});

app.get("/", (req, res, next) => {
  let value = 1;
  while (value < 50) {
    let typeOfNumber = value % 2 === 0 ? "Par" : "Impar";

    res.send(`<p>${value} Soy ${typeOfNumber}!</p>`);
    value += 1;
  }
});

app.listen(3000, () => console.log("Listening on port 3000!"));
