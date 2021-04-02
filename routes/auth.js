const express = require("express");
const router = express.Router({mergeParams: true});
const {protect} = require("../middleware/auth");

const { register, login, getMe } = require("../controllers/auth");

//直接获取请求
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(protect, getMe);




module.exports = router;
