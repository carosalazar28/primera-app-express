const express = require("express");
// const path = require("path");
const app = express();

// const mongoose = require("mongoose");

// connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

// connection.on("error", function (e) {
//   console.error(e);
// });

// var articleSchema = mongoose.Schema({
//   title: String,
//   body: String,
//   published: { type: Boolean, default: false },
// });

// var Article = mongoose.model("Article", articleSchema);

// var first = new Article({ title: "Artículo 1", body: "Cuerpo del artículo" });
// first.save(function (err) {
//   if (err) return console.error(err);
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const navigator = req.headers["user-agent"];

  res.redirect(`/${navigator}`);
});

// app.post("/", (req, res) => {
//   const name = req.body.name;
//   res.status(200).send(`<h1>Hola ${name}!</h1>`);
// });

app.listen(3000, () => console.log("Listening on port 3000!"));
