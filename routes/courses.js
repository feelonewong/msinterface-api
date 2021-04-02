const express = require("express");
const router = express.Router({mergeParams: true});
const { protect } = require("../middleware/auth");

const { getCourses, getCourse, addCourse,updateCourse } = require("../controllers/courses");
const advanceResults = require("../middleware/advancedResults");
const Course = require("../models/Courses");
//直接获取请求
router.route("/").get(advanceResults(Course,{
    path: "mscamp",
    select: "name description"
}),getCourses).post(protect,addCourse);

//根据id获取请求
router.route(`/:id`).get(getCourse).put(protect,updateCourse);


module.exports = router;
