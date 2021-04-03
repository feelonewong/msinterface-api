const express = require("express");
const router = express.Router();
const { getMscamps,getMscamp,createMscamp,updateMscamp,deleteMscamp } = require("../controllers/mscamps");
const advanceResults = require("../middleware/advancedResults");
const Mscamp = require("../models/Mscamp");

//路由鉴权 && 角色控制
const { protect , authorize } = require("../middleware/auth");

//定向路由
const courseRouter = require("./courses");
router.use("/:mscampId/courses", courseRouter);

router.route("/").get(advanceResults(Mscamp,"courses"), getMscamps).post(protect,  authorize("admin", "user") , createMscamp);

router.route(`/:id`).get(getMscamp).put(protect, authorize("admin", "user"), updateMscamp).delete(protect, authorize("admin", "user"), deleteMscamp);

module.exports = router;
