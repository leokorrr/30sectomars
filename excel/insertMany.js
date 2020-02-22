
const csvtojson = require('csvtojson')
const mongoose = require('mongoose');

const Pill = require('../models/aqp8/pill.model')
const Pizza = require('../models/pizza.model')
const User = require('../models/user.model')

const mongodbUrl = 'mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars';

csvtojson()
    .fromFile("user.csv")
    .then(csvData => {
        console.log(csvData);

        mongoose.connect(
            mongodbUrl,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err) => {
                if (err) throw err;

                User.insertMany(csvData, (err, res) => {
                    if (err) throw err;
                })
            }
        )
    })