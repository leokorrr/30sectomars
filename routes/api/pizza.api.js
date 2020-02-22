const express = require ('express');
const router = express.Router();

const Pizza = require('../../models/pizza.model');

router.get('/pizzas', (req, res) => {
    Pizza.find((err, pizzas) => {
        if(err) {
            console.log(err);
        } else {
            res.json(pizzas)
        }
    })
})

router.post('/pizzas-update', (req, res) => {
    let id = req.body.productId
    let updateObj = req.body.updateObj
    
    Pizza.findByIdAndUpdate({_id: id}, updateObj, {new: true}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })

    res.json(id)
})

router.post('/pizzas-delete', (req, res) => {
    let id = req.body.productId;
    console.log(req.body);
    
    Pizza.findByIdAndRemove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })
    res.json(id)
})

let keyword;

router.post('/pizzas-search', (req, res) => {
    keyword = req.body.keyword;
    let resultArr = [];

    Pizza.findById(keyword, (err, result) => {
        if(err) {
            Pizza.find((err, pizzas) => {
                if(err) {
                    console.log(err);
                    resultArr = ['error']
                    return res.json(resultArr)
                } else {
                    for(let i = 0; i < pizzas.length; i++) {
                        if(pizzas[i].title.includes(keyword)) {
                            resultArr.push(pizzas[i])
                        }
                    }
        
                    return res.json(resultArr)
                }
            })
        } else {
            resultArr = [result]
            return res.json(resultArr)
        }

    })
})

module.exports = router;