const express = require("express");
const bodyParser = require('body-parser');

const app = express();

var router = express.Router();
var PatientController = require('./app/Controllers/PatientController.js');

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","ejs");

app.get("/", PatientController.getPatient);

app.post("/", PatientController.createPatient);

app.listen(3000)