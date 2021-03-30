//import models
const Mscamps = require("../models/Mscamp");
const ErrorResponse = require("../utils/errorResponse");
/**
 * @desc 获取所有的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.getMscamps = async (req, res, next) => {
  try {
    const mscamps = await Mscamps.find();
    res.status(200).json({
      success: true,
      data: mscamps,
      count: mscamps.length,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc 获取单个的数据
 * @route GET /api/v1/mscamps/:id
 * @access 公开的
 */
exports.getMscamp = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

/**
 * @desc 创建单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.createMscamp = async (req, res, next) => {
  try {
    const mscamp = await Mscamps.create(req.body);
    res.status(200).json({
      resCode: 200,
      success: true,
      data: mscamp,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc 更新单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.updateMscamp = async (req, res, next) => {
  try {
    const mscamp = await Mscamps.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!mscamp) {
     return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
      success: true,
      data: mscamp,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc 删除单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.deleteMscamp = async (req, res, next) => {
  try {
    const mscamp = await Mscamps.findByIdAndDelete(req.params.id);
    if (!mscamp) {
      return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404));
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
};
