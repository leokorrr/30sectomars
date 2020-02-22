const mongoose = require('mongoose');

let Salad = require('../models/salad.model')

mongoose.connect('mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars', { useNewUrlParser: true}, (err)=>{
    if (err) throw err;
    console.log('server.js: database connected');
})

let title = '';
let description = 'Lorem ipsum dolor sit, amet consectetuSaladpisicing elit. Accusamus beatae tenetur ipsa recusandae unde animi maiores tempora magnam aperiam consequuntur, obcaecati impedit odit ab fugit! Deserunt hic officiis consectetur minima.';
let ingredients = ['lettuce', 'salmon', 'cucumber', 'cream cheese'];
let price = 15;
let weight = 200;
let hot = false;

function insertSalad(title, description, ingredients, price, weight, hot) {
    let salad = new Salad ({
        title: title,
        description: description,
        ingredients: ingredients,
        price: price,
        weight: weight,
        hot: hot
    })

    salad.save((err) => {
        if (err) throw err;
        console.log(`New salad ${title} was succesfully added`);
    })
}

var i = 0;   

function createObj() {
    setTimeout(function () {
        title = `Salad ${i}`;

        insertSalad(title, description, ingredients, price, weight, hot);
        i++;                     
        if (i < 20) {            
            createObj();             
        }                        
       }, 1000)
}

createObj();