const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MscampSchema = new Schema({
  name: {
    type: String,
    require: [true, "请填写培训课程名称"],
    unique: true,
    trim: true,
    maxLength: [50, "课程名字不能超过50个字"],
  },
  description: {
    type: String,
    require: [true, "请填写培训课程的描述"],
    maxLength: [500, "课程描述不能超过500个字"],
  },
  website: {
    type: String,
    match: [
      /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
      "请填写合法网址",
    ],
  },
  phone: {
    type: String,
    match: [
      /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
      "请填写正确的手机号码",
    ],
  },
  email: {
    type: String,
    match: [
      /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      "请填写正确的email地址",
    ],
  },
  address: {
    type: String,
    default: "上海市徐汇区古美路田林路99号",
  },
  careers: {
    type: String,
    required: true,
    enum: [
      "前端开发",
      "后端开发",
      "跨平台开发",
      "数据分析",
      "数据挖掘",
      "人工智能",
    ],
  },
  online: {
    type: Boolean,
    default: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

model.exports = mongoose.model("Mscamp", MscampSchema);
