const express = require("express");
const router = express.Router({mergeParams: true});

const { register, login } = require("../controllers/auth");

//直接获取请求
router.route("/register").post(register);
router.route("/login").post(login);



module.exports = router;
