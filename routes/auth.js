const express = require("express");
const router = express.Router({mergeParams: true});

const { register } = require("../controllers/auth");

//直接获取请求
router.route("/register").post(register);


module.exports = router;
