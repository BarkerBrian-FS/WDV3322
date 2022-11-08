const express = require('express');
const router = express.Router();
const {findUser, saveUser} = require('../db/db');
const bcrypt = require('bcrypt');
const User = require('../api/models/user');
const { default: mongoose } = require('mongoose');
const user = require('../api/models/user');

router.get("/profile",(req, res, next) => {
    res.json({
         message: "Got profile using GET",
     });
});

router.post("/signup",(req, res) => {
    findUser({email: user.email})
    if (user.email) {
        return res.status(400).json({
         message: 'That user already exisits! Try logging in!'
        });
    }
        const password = req.body.password;
        bcrypt.hash(password, 10, (err, hash) => {
            if(err){
                res.status(500).json({message: 'Somethings Wrong'});
            }
            else{
                const user = new User({
                    _id: mongoose.Types.ObjectId(),
                    firstName: req.body.firstName,
                    email: req.body.email,
                    password: hash
                });
                saveUser()
                res.status(201).json({
                    message: 'Signup - POST',
                    user: user,
                    firstName: user.firstName
                })
            }
        })
    //};
});

router.post("/login",(req, res) => {
    findUser({email: req.body.email})
    if(!user){
        return res.status(401).json({
            message: 'Login Failed'
        })
    }   
    bcrypt.compare(req.body.password, req.body.hash, (err, result) => {
        if(err){
            return res.status(500).json({ error: err.message })
        }
        else{
            if(result){
                res.status(201).json({
                    message: 'Authenticated',
                    result: result,
                    firstName: user.firstName
                })
            }
            else{
                res.status(401).json({message: 'Authentication Failed' })
            }
        }
    })
});

module.exports = router;