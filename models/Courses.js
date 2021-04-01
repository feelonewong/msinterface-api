const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "请添加课程名称"],
  },
  weeks: {
    type: Number,
    required: [true, "请填写课程周期"],
  },
  description: {
    type: String,
    required: [true, "请填写课程描述"],
  },
  tuition: {
    type: String,
    required: [true, "请添加课程费用"],
  },
  minimumSkill: {
    type: String,
    required: [true, "请添加学习后的程度"],
    enum: ["初级","中级", "高级"]
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  mscamp: {
    type: mongoose.Schema.ObjectId,
    ref: "Mscamp",
    required: true
  },
});

module.exports = mongoose.model("Courses", CoursesSchema);
