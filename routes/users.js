const express = require("express");

const router = express.Router();

const userscontroller = require("../controllers/users");
const { route } = require(".");

router.get("/", userscontroller.getAll);

router.get("/:id", userscontroller.getSingle);

module.exports = router;
