const user = require('../api/models/user');
const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/demo');
}

const findUser = async ({}) => {
    return await findUser.save()
}

const saveUser = async (newUser) => {
    return await newUser.save();
}

const disconnect = async () => {
    await mongoose.connection.close();
}

module.exports = { connect, findUser, saveUser, disconnect }