const express = require("express");
const { readData } = require("../controllers/googleController");

const googleRoutes = express();

const bodyParser = require("body-parser");

googleRoutes.use(bodyParser.json());
googleRoutes.use(bodyParser.urlencoded({ extended: true }));

googleRoutes.get("/read-data", readData);

module.exports = googleRoutes;
