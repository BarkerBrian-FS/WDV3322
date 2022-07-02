const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.port

app.get("/",(req, res, next) => {
   res.json({
        message: "Did you GET IT!?!?!",
        metadata: {
            host: req.hostname,
            port: port,
            method:req.method
        }
    });
});

app.post("/",(req, res) => {
    res.json({
        message: "It's been posted",
        metadata: {
            host: req.hostname,
            port: port,
            method:req.method
        }
    });
});

app.patch("/",(req, res) => {
    res.json({
        message: "It's been patched",
        metadata: {
            host: req.hostname,
            port: port,
            method:req.method
        }
    });
});

app.delete("/",(req, res) => {
    res.json({
        message: "It's been deleted",
        metadata: {
            host: req.hostname,
            port: port,
            method:req.method
        }
    });
});

//middleware modules for error handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error)
});

//middleware to send error neatly 
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        }
    });
});

app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`));