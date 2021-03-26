const express = require("express");
const router = express.Router();
const { getMscamps,getMscamp,createMscamp,updateMscamp,deleteMscamp } = require("../controllers/mscamps");

router.route("/").get(getMscamps).post(createMscamp);

router.route(`/:id`).get(getMscamp).put(updateMscamp).delete(deleteMscamp);

module.exports = router;
