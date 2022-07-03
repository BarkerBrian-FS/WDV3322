const express = require('express');
const router = express.Router();

router.get("/",(req, res, next) => {
    res.json({
         message: "Did you GET IT!?!?!",
         metadata: {
             host: req.hostname,
             port: process.env.port,
             method:req.method
         }
     });
 });

router.get('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).json({
        message: "Get using id",
        metadata: {
            host: req.hostname,
            method: req.method,
            port: process.env.port,
            ID: id,
        }
    });
});

router.put('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).json({
        message: "Put using id",
        metadata: {
            host: req.hostname,
            method: req.method,
            port: process.env.port,
            ID: id
        }
    });
});

router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).json({
        message: "Delete using id",
        metadata: {
            host: req.hostname,
            method: req.method,
            port: process.env.port
        }
    });
});
 
 router.post("/",(req, res) => {
     res.json({
         message: "It's been posted",
         metadata: {
             host: req.hostname,
             port: process.env.port,
             method:req.method
         }
     });
 });

module.exports = router;