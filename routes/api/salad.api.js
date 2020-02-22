const express = require ('express');
const router = express.Router();

const Salad = require('../../models/salad.model');

router.get('/salads', (req, res) => {
    Salad.find((err, salads) => {
        if(err) {
            console.log(err);
        } else {
            res.json(salads)
        }
    })
})

router.post('/salads-update', (req, res) => {
    let id = req.body.productId
    let updateObj = req.body.updateObj
    
    Salad.findByIdAndUpdate({_id: id}, updateObj, {new: true}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })

    res.json(id)
})

router.post('/salads-delete', (req, res) => {
    let id = req.body.productId;
    console.log(req.body);
    
    Salad.findByIdAndRemove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })
    res.json(id)
})

let keyword;

router.post('/salads-search', (req, res) => {
    keyword = req.body.keyword;
    let resultArr = [];

    Salad.findById(keyword, (err, result) => {
        if(err) {
            Salad.find((err, salads) => {
                if(err) {
                    console.log(err);
                    resultArr = ['error']
                    return res.json(resultArr)
                } else {
                    for(let i = 0; i < salads.length; i++) {
                        if(salads[i].title.includes(keyword)) {
                            resultArr.push(salads[i])
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