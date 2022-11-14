const user = require('../api/models/user');
const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
    await mongoose.connect(process.env.mongoDbTest);
}

const findUser = async () => {
    return await user.findOne();
}

const saveUser = async (newUser) => {
    return await newUser.save();
}

const disconnect = async () => {
    await mongoose.connection.close();
}

module.exports = { connect, findUser, saveUser, disconnect }