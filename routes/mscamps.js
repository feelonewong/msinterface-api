const express = require("express");
const router = express.Router();
const { getMscamps,getMscamp,createMscamp,updateMscamp,deleteMscamp } = require("../controllers/mscamps");


//定向路由
const courseRouter = require("./courses");
router.use("/:mscampId/courses", courseRouter);

router.route("/").get(getMscamps).post(createMscamp);

router.route(`/:id`).get(getMscamp).put(updateMscamp).delete(deleteMscamp);

module.exports = router;
