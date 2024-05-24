const express = require("express");
const router = express.Router();
const controller = require("../controllers/registerController");


router.post("/registrar", (req, res)=>{
  controller.postUser(req, res);
});

router.post("/loggin", (req, res)=>{
  controller.loggin(req, res);
})
module.exports = router;
