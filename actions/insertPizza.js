const mongoose = require('mongoose');

let Pizza = require('../models/pizza.model')

mongoose.connect('mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars', { useNewUrlParser: true}, (err)=>{
    if (err) throw err;
    console.log('server.js: database connected');
})

let title = '';
let description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus beatae tenetur ipsa recusandae unde animi maiores tempora magnam aperiam consequuntur, obcaecati impedit odit ab fugit! Deserunt hic officiis consectetur minima.';
let ingredients = ['sous', 'cheese', 'ham', 'mushroom'];
let weights = [400, 500, 700];
let sizes = [30, 40, 50];
let prices = [10, 12, 14];
let hot = false;

function insertPizza(title, description, ingredients, weights, sizes, prices, hot) {
    let pizza = new Pizza ({
        title: title,
        description: description,
        ingredients: ingredients,
        weights: weights,
        sizes: sizes,
        prices: prices,
        hot: hot
    })

    pizza.save((err) => {
        if (err) throw err;
        console.log(`New pizza ${title} was succesfully added`);
    })
}

var i = 0;   

function createObj() {
    setTimeout(function () {
        title = `Pizza ${i}`;

        insertPizza(title, description, ingredients, weights, sizes, prices, hot);
        i++;                     
        if (i < 20) {            
            createObj();             
        }                        
       }, 1000)
}

createObj();