const express = require("express");

const bodyparser = require("body-parser");

const mongodb = require("./data/database");
const app = express();

const port = process.env.PORT || 3001;
app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Acces-Control-Allow-Headers",
    "Origin, X-Rrquested-With, Content-Type. Accept, Z-key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is Running on port ${port}`);
    });
  }
});
