const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

/**
 * @desc 注册
 * @route GET /api/v1/auth/register
 * @access 公开的
 */
exports.register = asyncHandler(async (req, res, next) => {
  const { name, role, email, password } = req.body;
  const user = await User.create({ name, role, email, password });
  
  sendTokenResponse(200,user, res);
});

/**
 * @desc 登录
 * @route GET /api/v1/auth/register
 * @access 公开的
 */
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("邮箱或密码不能为空", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  //判断用户是否存在
  if (!user) {
    return next(new ErrorResponse("参数错误", 401));
  }

  let isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("登录密码不正确", 400));
  }

  sendTokenResponse(200,user, res);
});

//生成的token存储到cookie方法中
const sendTokenResponse = (statusCode, user, res) => {
  const token = user.getSingedJsonWebToken();
  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  if(process.env.NODE_ENV === "production"){
      options.secure = true;
  }
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    data: {},
    token,
  });
};
