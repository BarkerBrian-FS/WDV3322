const express = require('express');
const router = express.Router();

router.get("/profile",(req, res, next) => {
    res.json({
         message: "Got profile using GET",
     });
 });

 router.post("/signup",(req, res) => {
     res.json({
         message: "Signup has been POSTED",
     });
 });

 router.post("/login",(req, res) => {
    res.json({
        message: "Login has been POSTED",
    });
});

module.exports = router;