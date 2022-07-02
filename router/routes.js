const express = require('express');
const router = express.Router();

router.get("/:id", (req, res) =>{
    const id = req.params.id;
    res.status(200).json({
        message: "Get using id",
        metadata: {

        }
    });
});

router.post('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).json({
        message: "Post using id",
        metadata: {

        }
    });
});

router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    res.status(200).json({
        message: "Delete using id",
        metadata: {

        }
    });
});

module.exports = router;