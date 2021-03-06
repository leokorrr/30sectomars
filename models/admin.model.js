const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema ({
        nickname: {
            type: String,
            required: true
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
            required: true
        },
        password: {
            type: String,
            required: true
        }
})

module.exports = mongoose.model('Admin', Admin)

