const express = require("express");
const app = express();

app.get("/makers/:name", (req, res) => {
  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const name = req.params.name
    ? capitalizarPrimeraLetra(req.params.name)
    : "desconocido";
  res.send(`<h1>Hola ${name}!</h1>`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
