const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.route("/").get((req, res) => {
  res.send("Hello World");
});
