const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/mscamps");
const logger = require("./middleware/logger");
const morgan = require("morgan");
const colors = require("colors");

dotenv.config({
  path: "./config/config.env",
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

//首页
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "欢迎访问msinterface-api"
    })
});


app.use(`/api/v1/mscamps`, router);

app.listen(
  PORT,
  console.log(`Server runnint on ${process.env.NODE_ENV} mode on port ${PORT}`.green)
);
