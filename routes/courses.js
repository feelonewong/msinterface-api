const express = require("express");
const router = express.Router({mergeParams: true});
const { getCourses, getCourse, addCourse } = require("../controllers/courses");

//直接获取请求
router.route("/").get(getCourses).post(addCourse);

//根据id获取请求
router.route(`/:id`).get(getCourse);


module.exports = router;
