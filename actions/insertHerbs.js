const mongoose = require('mongoose');

let Herb = require('../models/aqp8/herb.model')

mongoose.connect('mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars', { useNewUrlParser: true}, (err)=>{
    if (err) throw err;
    console.log('server.js: database connected');
})

let title = '';
let description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus beatae tenetur ipsa recusandae unde animi maiores tempora magnam aperiam consequuntur, obcaecati impedit odit ab fugit! Deserunt hic officiis consectetur minima.';
let weight = 1;
let price = 10;
let ROO = 'low';
let quantity = 200;
let origin = "Amsterdam, Netherlands"


function insertHerb(title, description, weight, price, ROO, quantity, origin) {
    let herb = new Herb ({
        title: title,
        description: description,
        weight: weight,
        price: price,
        ROO: ROO,
        quantity: quantity,
        origin: origin
    })

    herb.save((err) => {
        if (err) throw err;
        console.log(`New herb ${title} was succesfully added`);
    })
}

var i = 0;   

function createObj() {
    setTimeout(function () {
        title = `Herb ${i}`;

        insertHerb(title, description, weight, price, ROO, quantity, origin);
        i++;                     
        if (i < 20) {            
            createObj();             
        }                        
       }, 1000)
}

createObj();