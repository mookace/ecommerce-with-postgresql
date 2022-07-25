const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/getallusers", userController.getAllUsers);

module.exports = router;
