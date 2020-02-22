const mongoose = require('mongoose');

let Pill = require('../models/aqp8/pill.model')

mongoose.connect('mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars', { useNewUrlParser: true}, (err)=>{
    if (err) throw err;
    console.log('server.js: database connected');
})

let title = '';
let description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus beatae tenetur ipsa recusandae unde animi maiores tempora magnam aperiam consequuntur, obcaecati impedit odit ab fugit! Deserunt hic officiis consectetur minima.';
let weight = 0.4;
let price = 5;
let substanceAmount = 250;
let quantity = 500;
let origin = "Amsterdam, Netherlands"


function insertPill(title, description, weight, price, substanceAmount, quantity, origin) {
    let pill = new Pill ({
        title: title,
        description: description,
        weight: weight,
        price: price,
        substanceAmount: substanceAmount,
        quantity: quantity,
        origin: origin
    })

    pill.save((err) => {
        if (err) throw err;
        console.log(`New pill ${title} was succesfully added`);
    })
}

var i = 0;   

function createObj() {
    setTimeout(function () {
        title = `Pill ${i}`;

        insertPill(title, description, weight, price, substanceAmount, quantity, origin);
        i++;                     
        if (i < 20) {            
            createObj();             
        }                        
       }, 1000)
}

createObj();