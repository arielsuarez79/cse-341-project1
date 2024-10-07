const router = require("express").Router();

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
  //#swaggwe.tags=['Hello d']
  res.send("Hello World!");
});

router.use("/users", require("./users"));

module.exports = router;
