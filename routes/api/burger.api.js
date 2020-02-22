const express = require ('express');
const router = express.Router();

const Burger = require('../../models/burger.model');

router.get('/burgers', (req, res) => {
    Burger.find((err, burgers) => {
        if(err) {
            console.log(err);
        } else {
            res.json(burgers)
        }
    })
})

router.post('/burgers-update', (req, res) => {
    let id = req.body.productId
    let updateObj = req.body.updateObj
    
    Burger.findByIdAndUpdate({_id: id}, updateObj, {new: true}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })

    res.json(id)
})

router.post('/burgers-delete', (req, res) => {
    let id = req.body.productId;
    console.log(req.body);
    
    Burger.findByIdAndRemove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })
    res.json(id)
})

let keyword;

router.post('/burgers-search', (req, res) => {
    keyword = req.body.keyword;
    let resultArr = [];

    Burger.findById(keyword, (err, result) => {
        if(err) {
            Burger.find((err, burgers) => {
                if(err) {
                    console.log(err);
                    resultArr = ['error']
                    return res.json(resultArr)
                } else {
                    for(let i = 0; i < burgers.length; i++) {
                        if(burgers[i].title.includes(keyword)) {
                            resultArr.push(burgers[i])
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