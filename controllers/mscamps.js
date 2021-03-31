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
  let queryStr = JSON.stringify(req.query);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match)=>`$${match}` ); 
  const mscamps = await Mscamps.find(JSON.parse(queryStr));
  res.status(200).json({
    success: true,
    data: mscamps,
    count: mscamps.length,
  });
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
exports.updateMscamp = asyncHandler(
  async (req, res, next) => {
    try {
      const mscamp = await Mscamps.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!mscamp) {
        return next(
          new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
        );
      }
      res.status(200).json({
        success: true,
        data: mscamp,
      });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * @desc 删除单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.deleteMscamp = asyncHandler(
  async (req, res, next) => {
    try {
      const mscamp = await Mscamps.findByIdAndDelete(req.params.id);
      if (!mscamp) {
        return next(
          new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404)
        );
      }
      res.status(200).json({
        success: true,
        data: {
          message: "删除成功",
        },
      });
    } catch (error) {
      next(error);
    }
  }
);
