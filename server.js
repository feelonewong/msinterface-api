const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/mscamps");


dotenv.config({
  path: "./config/config.env",
});

const app = express();
const PORT = process.env.PORT || 3000;

//获取所有数据
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "欢迎访问msinterface-api"
    })
});


app.use(`/api/v1/mscamps`, router);

app.listen(
  PORT,
  console.log(`Server runnint on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
