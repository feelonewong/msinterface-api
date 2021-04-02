const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;
const UserSchema = Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "请添加名字"],
  },
  email: {
    type: String,
    required: [true, "请添加邮箱"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "请填写正确的邮箱地址",
    ],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "visitor"],
  },
  password: {
    type: String,
    required: [true, "请添加密码"],
    minlength: 6,
    // select: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
