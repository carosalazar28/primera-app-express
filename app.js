const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const value = 1;
  while (value < 50) {
    const typeOfNumber = value % 2 === 0 ? "Par" : "Impar";
    res.send(`<p>${value} Soy ${typeOfNumber}!</p>`);
    value += 1;
  }
});

app.listen(3000, () => console.log("Listening on port 3000!"));
