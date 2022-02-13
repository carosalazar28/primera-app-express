require("dotenv").config();
const express = require("express");
// const path = require("path");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/mongo-1",
  { useNewUrlParser: true }
);
// connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

mongoose.connection.on("error", function (e) {
  console.error(e);
});

var visitorSchema = mongoose.Schema(
  {
    date: Date,
    name: String,
  },
  {
    timestamps: true,
  }
);

var Visitor = mongoose.model("Visitor", visitorSchema);

// var first = new Article({ title: "Artículo 1", body: "Cuerpo del artículo" });
// first.save(function (err) {
//   if (err) return console.error(err);
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const requestName =
    req.query.name !== undefined && req.query.name.length > 0
      ? req.query.name
      : "Anónimo";

  const date = new Date(Date.now());

  const visitor = new Visitor({ date, name: requestName });

  if (!visitor) throw new Error("visitor does not created");

  res.status(200).send("<h1>El visitante fue almacenado con éxito</h1>");
});

// app.post("/", (req, res) => {
//   const name = req.body.name;
//   res.status(200).send(`<h1>Hola ${name}!</h1>`);
// });

app.listen(3000, () => console.log("Listening on port 3000!"));
