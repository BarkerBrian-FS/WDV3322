
const connect = async () => {
    console.log('Mock Connection')
}

const findUser = async ({}) => {
    console.log('Mock User Found')
    return Promise.resolve({
        firstName: 'Brian' ,
        lastName: 'Barker'  ,
        address: '123 Washington' ,
        city: 'Miami' ,
        state: 'Florida' ,
        zip: 86753 ,
        email: 'brian@brian.com' ,
        password: 'Batman'
    })
}

const saveUser = async (newUser) => {
    console.log('Mock User Saved')
    return Promise.resolve({
        firstName: 'Brian' ,
        lastName: 'Barker'  ,
        address: '123 Washington' ,
        city: 'Miami' ,
        state: 'Florida' ,
        zip: 86753 ,
        email: 'brian@brian.com' ,
        password: 'Batman'
    })
}

const disconnect = async () => {
    console.log('Mock Disconnection')
}

module.exports = { connect, findUser, saveUser, disconnect }