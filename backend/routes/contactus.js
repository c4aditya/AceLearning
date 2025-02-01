const express = require("express");
const contactUsController = require("../controllers/conatactus")

const route = express.Router();

route.post("/contsctUs" , contactUsController)

module.exports = route ;