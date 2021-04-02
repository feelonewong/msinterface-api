const User = require("../models/User");
// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

/**
 * @desc 注册
 * @route GET /api/v1/auth/register
 * @access 公开的
 */
exports.register = asyncHandler(async (req, res, next) => {
  const { name, role, email, password } = req.body;
  const user = await User.create({ name, role, email, password });
  const token = user.getSingedJsonWebToken();
  res.status(200).json({
    success: true,
    data: token,
  });
});
