const express = require("express");
const router = express.Router();
const { generateQr } = require("../controller/Qrcontroller")



router.route("/").post(generateQr);



module.exports = router;