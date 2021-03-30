const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  //id数据源报错
  if (err.name === "CastError") {
    const message = `Server not found  id:${err.value}`;
    err = new ErrorResponse(message, 404);
  }

  //重复用户名报错
  if (err.code === 11000) {
    const message = "用户名不能重复";
    err = new ErrorResponse(message, 400);
  }

  //必填项错误
  if (err.name == "ValidationError") {
    const message = Object.values(err.errors).map((value) => {return value.message});
    err = new ErrorResponse(message, 400);
  }
  res
    .status(err.statusCode || 500)
    .json({ success: false, error: err.message || "Server Error" });
};

module.exports = errorHandler;
