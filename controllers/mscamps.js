//import models
const Mscamps = require("../models/Mscamp");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
/**
 * @desc 获取所有的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.getMscamps = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advanceResults);
});

/**
 * @desc 获取单个的数据
 * @route GET /api/v1/mscamps/:id
 * @access 公开的
 */
exports.getMscamp = asyncHandler(async (req, res, next) => {
  const mscamp = await Mscamps.findById(req.params.id);
  if (!mscamp) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: mscamp,
  });
});

/**
 * @desc 创建单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.createMscamp = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const publistMscamp = await Mscamps.findOne({ user: req.user.id });

  if (publistMscamp && req.user.role !== "admin") {
    return next(new ErrorResponse("该机构已经存在不要重复创建", 400));
  }

  const mscamp = await Mscamps.create(req.body);
  res.status(200).json({
    resCode: 200,
    success: true,
    data: mscamp,
  });
});

/**
 * @desc 更新单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.updateMscamp = asyncHandler(async (req, res, next) => {
  let mscamp = await Mscamps.findById(req.params.id);
  if (!mscamp) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }
  //确定当前id和登录用户的id一致
  if (mscamp.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(`该用户${req.params.id}无权限更新此数据`, 401)
    );
  }

  mscamp = await Mscamps.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: mscamp,
  });
});

/**
 * @desc 删除单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.deleteMscamp = asyncHandler(async (req, res, next) => {
  const mscamp = await Mscamps.findById(req.params.id);
  if (!mscamp) {
    return next(
      new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
    );
  }

  //确定当前id和登录用户的id一致
  if (mscamp.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(`该用户${req.params.id}无权限删除此数据`, 401)
    );
  }

  mscamp.remove();
  res.status(200).json({
    success: true,
    data: {
      message: "删除成功",
    },
  });
});
