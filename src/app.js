const express = require('express');
const config = require('./config');
const app = express();
const router = require("../src/api/routes/router.routes");
const cors = require("cors");

app.use(express.json());

app.use(cors())

app.use("/",router);

app.set('port', config.app.port);

module.exports = app;