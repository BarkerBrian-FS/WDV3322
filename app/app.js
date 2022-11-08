const express = require ('express');
const mongoose = require ('mongoose')
const app = express();
const cors = require ('cors')
const userRoute = require('../router/userRoute')
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

//middleware to handle cors policy
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

//     if(req.method === 'Options'){
//         res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE');
//     }
//     next();
// })

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

