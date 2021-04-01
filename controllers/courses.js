const Course = require("../models/Courses");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Mscamp = require("../models/Mscamp");

/**
 * @desc 获取所有的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;
  if(req.params.mscampId){
    query = Course.find({ mscamp: req.params.mscampId})
  }else{
    query = Course.find().populate({
      path:"mscamp",
      select: "name description"
    });
  }
  const courses = await query;
  res.status(200).json({
    success: true,
    data: courses,
    count: courses.length,
  });
});

/**
 * @desc 根据ID获取单个数据
 * @route GET /api/v1/courses/:id
 * @access 公开的
 */
 exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({
    path: "mscamp",
    select: "name description"
  });
  if (!course) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: course,
  });
});


/**
 * @desc 创建单个课程数据
 * @route GET /api/v1/courses/
 * @access 公开的
 */
 exports.addCourse = asyncHandler(async (req, res, next) => {
   //先查询mscamp的数据是否存在没查到才会添加
  const mscamp = await Mscamp.findById(req.params.mscampId);
  if (!mscamp) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }

  const course = await Course.create(req.body);
  res.status(200).json({
    success: true,
    data: course,
  });
});

