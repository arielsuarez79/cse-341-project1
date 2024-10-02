const express = require("express");

const router = express.Router();

const userscontroller = require("../controllers/users");
//const { route } = require(".");

router.get("/", userscontroller.getAll);

router.get("/:id", userscontroller.getSingle);

router.post("/", userscontroller.createUser);

router.put("/:id", userscontroller.updateUser);

router.delete("/:id", userscontroller.deleteUser);

module.exports = router;
