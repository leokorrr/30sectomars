const mongoose = require('mongoose');

let Burger = require('../models/burger.model')

mongoose.connect('mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars', { useNewUrlParser: true}, (err)=>{
    if (err) throw err;
    console.log('server.js: database connected');
})

let title = '';
let description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus beatae tenetur ipsa recusandae unde animi maiores tempora magnam aperiam consequuntur, obcaecati impedit odit ab fugit! Deserunt hic officiis consectetur minima.';
let ingredients = ['ground beef', 'cheese', 'ham', 'mushroom'];
let weights = [400, 500, 600];
let sizes = ['small', 'big'];
let prices = [13, 15];
let hot = false;

function insertBurger(title, description, ingredients, weights, sizes, prices, hot) {
    let burger = new Burger ({
        title: title,
        description: description,
        ingredients: ingredients,
        weights: weights,
        sizes: sizes,
        prices: prices,
        hot: hot
    })

    burger.save((err) => {
        if (err) throw err;
        console.log(`New burger ${title} was succesfully added`);
    })
}

var i = 0;   

function createObj() {
    setTimeout(function () {
        title = `Burger ${i}`;

        insertBurger(title, description, ingredients, weights, sizes, prices, hot);
        i++;                     
        if (i < 20) {            
            createObj();             
        }                        
       }, 1000)
}

createObj();