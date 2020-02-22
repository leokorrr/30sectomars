const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pill = new Schema ({
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        weight: {
            type: Number,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        substanceAmount: {
            type: Number,
            require: true
        },
        quantity: {
            type: Number,
            requre: true
        },
        origin: {
            type: String,
            require: true
        },
})

module.exports = mongoose.model('Pill', Pill)

