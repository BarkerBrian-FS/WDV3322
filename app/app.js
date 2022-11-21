const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const cors = require ('cors');
const userRoute = require('../router/userRoute');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../config/swaggerOptions.json');

//connect to mongoose
mongoose.connect(process.env.mongoDbUrl, (err) => {
    if(err){
        console.error('Error:', err.message);
    } else {
        console.log('Connected to mongo');
    }
});

//middleware to make all requests json
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

//Routes
app.use("/users", userRoute);

//add middleware for swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
        },
    });
});

module.exports = app;

