const Course = require("../models/Courses");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

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
