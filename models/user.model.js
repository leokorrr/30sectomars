const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema ({
        nickname: {
            type: String,
            require: true,
            unique: true
        },
        name: {
            type: String
        },
        surname: {
            type: String
        },
        address: {
            type: String
        },
        orders: {
            type: String
        },
        cart: {
            type: Array
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
})

module.exports = mongoose.model('User', User)

