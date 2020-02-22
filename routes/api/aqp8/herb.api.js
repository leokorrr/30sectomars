const express = require ('express');
const router = express.Router();

const Herb = require('../../../models/aqp8/herb.model');

router.get('/herbs', (req, res) => {
    Herb.find((err, herbs) => {
        if(err) {
            console.log(err);
        } else {
            res.json(herbs)
        }
    })
})

router.post('/herbs-update', (req, res) => {
    let id = req.body.productId
    let updateObj = req.body.updateObj
    
    Herb.findByIdAndUpdate({_id: id}, updateObj, {new: true}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })

    res.json(id)
})

router.post('/herbs-delete', (req, res) => {
    let id = req.body.productId;
    console.log(req.body);
    
    Herb.findByIdAndRemove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })
    res.json(id)
})

let keyword;

router.post('/herbs-search', (req, res) => {
    keyword = req.body.keyword;
    let resultArr = [];

    Herb.findById(keyword, (err, result) => {
        if(err) {
            Herb.find((err, herbs) => {
                if(err) {
                    console.log(err);
                    resultArr = ['error']
                    return res.json(resultArr)
                } else {
                    for(let i = 0; i < herbs.length; i++) {
                        if(herbs[i].title.includes(keyword)) {
                            resultArr.push(herbs[i])
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