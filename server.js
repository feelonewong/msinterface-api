const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/mscamps");
const logger = require("./middleware/logger");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
dotenv.config({
  path: "./config/config.env",
});

const app = express();

//配置json
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
//首页
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "欢迎访问msinterface-api"
    })
});

//链接数据库
connectDB();

app.use(`/api/v1/mscamps`, router);

//写在路由挂载之前
app.use(errorHandler);
const server = app.listen(
  PORT,
  console.log(`Server runnint on ${process.env.NODE_ENV} mode on port ${PORT}`.green)
);


process.on("unhandledRejection", (err, promise)=>{
  console.log(`Error: ${err.message}`.red.bold);

  server.close( ()=>{
    process.exit(1);
  })
})