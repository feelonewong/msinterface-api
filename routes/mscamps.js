const express = require("express");
const router = express.Router();

//获取单个数据
router.get(`/api/v1/mscamps/:id`, (req, res) => {
  res.status(200).json({
    success: true,
    message: `根据获取${req.params.id}单个msinterface-api数据`,
  });
});

//创建单个数据
router.post(`/`, (req, res) => {
  res.status(200).json({
    success: true,
    message: `创建单个msinterface-api数据`,
  });
});

//更新单个数据
router.put(`/:id`, (req, res) => {
  res.status(200).json({
    success: true,
    message: `根据${req.params.id}更新单个数据成功`,
  });
});

//删除数据
router.delete(`/:id`, (req, res) => {
  res.status(200).json({
    success: true,
    message: `删除${req.params.id}数据成功`,
  });
});

module.exports = router;
