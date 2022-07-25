const userController = {};
const pool = require("../config/db");
const jwt = require("jsonwebtoken");
var CryptoJS = require("crypto-js");

userController.register = async (req, res) => {
  try {
    const { fullname, email, phone_no } = req.body;
    let passwordHashing = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
    const newUser = await pool.query(
      "insert into users(fullname,email,phone_no,created_at,password) values($1,$2,$3,current_timestamp,$4) RETURNING *",
      [fullname, email, phone_no, passwordHashing]
    );
    res.status(200).send({ status: "success", data: newUser.rows });
  } catch (error) {
    res.status(500).send(error);
  }
};

// login
userController.login = async (req, res) => {
  try {
  } catch (error) {
    res.send(error);
  }
};

// google login

userController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query("select * from users");
    res.status(200).send(allUsers.rows);
  } catch (error) {
    res.send(error);
  }
};

module.exports = userController;
