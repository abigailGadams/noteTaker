const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// converting public folder into client folder
app.use(express.static("public"));

// Need data parser - converting back to orig from encrypt
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/htmlRoutes"));

app.listen(PORT, function () {
  console.log("app is listening", PORT);
});
