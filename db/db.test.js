const {saveUser, connect, disconnect, findUser} = require('./db');
const User = require('../api/models/user');
const mongoose = require('mongoose');

//jest.mock('./db')

beforeEach( async ()  => {
   await connect()
})

describe('DB Functions', () => {
    test('save user', async () => {
        const user = new User({
            _id : mongoose.Types.ObjectId(),
            firstName: 'Brian' ,
            lastName: 'Barker'  ,
            address: '123 Washington' ,
            city: 'Miami' ,
            state: 'Florida' ,
            zip: '86753',
            email: 'brian@brian.com' ,
            password: 'Batman'
        });
        const newUser = await saveUser(user)

        expect(newUser.address).toEqual('123 Washington');
        expect(newUser.city).toEqual('Miami');
        expect(newUser.zip).toEqual('86753');
    })

    test('find user', async () => {
        const user = ({
            firstName: 'Brian' ,
            lastName: 'Barker'  ,
            address: '123 Washington' ,
            city: 'Miami' ,
            state: 'Florida' ,
            zip: 86753 ,
            email: 'brian@brian.com' ,
            password: 'Batman'
        })
        const newUser = await findUser(user)
        expect(newUser.email).toEqual('brian@brian.com');
        expect(newUser.password).toEqual('Batman');
        expect(newUser.address).toEqual('123 Washington'); 
    })
})

afterEach( async ()  => {
   await disconnect()
})