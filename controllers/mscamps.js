/**
 * @desc 获取所有的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.getMscamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `获取所有msinterface-api数据`,
  });
};

/**
 * @desc 获取单个的数据
 * @route GET /api/v1/mscamps/:id
 * @access 公开的
 */
exports.getMscamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `获取单一的msinterface-api数据`,
  });
};

/**
 * @desc 创建单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.createMscamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `创建单个msinterface-api数据`,
  });
};

/**
 * @desc 更新单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.updateMscamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `根据${req.params.id}更新单个数据成功`,
  });
};


/**
 * @desc 删除单个的数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
 exports.deleteMscamp = (req, res, next) => {
    res.status(200).json({
      success: true,
      message: `删除${req.params.id}数据成功`,
    });
  };
  