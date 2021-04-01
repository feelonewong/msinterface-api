const fs = require("fs");
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Mscamps = require("./models/Mscamp");
const Courses = require("./models/Courses");

dotenv.config({
  path: "./config/config.env",
});

// const Mscamp = require("./models/Mscamp");

mongoose.connect(process.env.NET_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//读取本地数据
const mscamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/mscamps.json`, "utf-8")
);
const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/courses.json`, "utf-8")
);

//导入数据到mongodb
const importData = async () => {
  try {
    await Mscamps.create(mscamps);
    await Courses.create(courses);
    console.log("导入数据成功!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

//删除数据
const deleteData = async () => {
  try {
    await Mscamps.deleteMany();
    await Courses.deleteMany();
    console.log("删除数据成功".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-delete") {
  deleteData();
} else if (process.argv[2] === "-import") {
  importData();
}
