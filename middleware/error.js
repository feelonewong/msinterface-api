const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  if(err.name = "CastError"){
    const message = `Server not found  id:${err.value}`;
    err = new ErrorResponse(message, 404);
  }
  res.status(err.statusCode||500).json({ success: false, error: err.message || "Server Error" });
};

module.exports = errorHandler;
