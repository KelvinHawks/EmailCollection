const express = require("express");

const userControlers = require("../controllers/UserControler");

const router = express.Router();

router.post("/new/user", userControlers.addUsers);
//router.get("/user/:uid", userControlers.getuser);
//router.delete("/:uid", userControlers.deleteUser);

module.exports = router;
