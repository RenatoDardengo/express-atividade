const express = require ("express");
const router = express.Router();
const addressController = require("../controllers/AddressController")

router.get("/", addressController.index)

module.exports = router;