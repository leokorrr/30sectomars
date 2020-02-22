const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Salad = new Schema ({
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
        weight: {
            type: Number,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        hot: {
            type: Boolean,
            require: true
        }
})

module.exports = mongoose.model('Salad', Salad)

