const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkAuth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.jwt_key);
        console.log(decoded)
        req.userData = decoded;
        console.log(req.userData)
        next();
    } catch (error) {
        res.status(401).json({message: 'Authorization failed'});
    }
};

module.exports = checkAuth;

