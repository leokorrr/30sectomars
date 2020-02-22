const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Burger = new Schema ({
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        ingredients: {
            type: Array,
            require: true
        },
        weights: {
            type: Array,
            require: true
        },
        sizes: {
            type: Array,
            require: true
        },
        prices: {
            type: Array,
            require: true
        },
        hot: {
            type: Boolean,
            require: true
        }
})

module.exports = mongoose.model('Burger', Burger)

