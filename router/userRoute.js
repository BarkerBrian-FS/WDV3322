const express = require('express');
const router = express.Router();
const {findUser, saveUser} = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const user = require('../api/models/user');
const checkAuth = require('../auth/checkAuth');
const { restart } = require('nodemon');
require('dotenv').config;

router.get("/profile", checkAuth,(req, res, next) => {
    res.status(200).json({message: req.userData});
});

router.post("/signup",(req, res) => {
    findUser({email: req.body.email})
    if (!user) {
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
                const newUser = new user({
                    _id: mongoose.Types.ObjectId(),
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    zip: req.body.zip,
                    email: req.body.email,
                    password: hash
                });
                saveUser(newUser)
                res.status(201).json({
                    message: 'Signup - POST',
                    newUser: newUser,
                    firstName: newUser.firstName
                })
            }
        })
    //};
});

router.post("/login",async (req, res) => {
    let user = await findUser({email: req.body.email})
    if(!user){
        return res.status(404).json({message: "user not found"});
    }
     if(user){
        let validPassword = await bcrypt.compare(req.body.password, user.password);
        if(validPassword){
            const token = jwt.sign({email: user.email, firstName: user.firstName, lastName: user.lastName}, 
                process.env.jwt_key);
            res.status(201).json({
                message: 'Authenticated',
                token: token,
            })
            }
            else{
                res.status(401).json({message: 'Authentication Failed' })
            }
        }
    })


module.exports = router;