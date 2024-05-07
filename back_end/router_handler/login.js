const db = require("../db/index");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
 
exports.userLogin = (req, res) => {
  const { username, password } = req.body;

  const sql = "select * from user_login where username=?";

  db.query(sql, username, (err, results) => {
    if (err) return res.output(err);

    if (results.length !== 1) return res.output("Login failed!");

    const compareResult = bcryptjs.compareSync(password, results[0].password);

    if (!compareResult) {
      return res.output("Password error, login failure!");
    }

    const user = { ...results[0], password: "" };
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn,
    });
    res.output("Login successful", 0, "Bearer " + tokenStr);
  });
};