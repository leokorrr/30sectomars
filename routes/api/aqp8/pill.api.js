const express = require ('express');
const router = express.Router();
const Pill = require('../../../models/aqp8/pill.model');


router.get('/pills', (req, res) => {
    Pill.find((err, pills) => {
        if(err) {
            console.log(err);
        } else {
            res.json(pills)
        }
    })
})

router.post('/pills-update', (req, res) => {
    let id = req.body.productId
    let updateObj = req.body.updateObj
    
    Pill.findByIdAndUpdate({_id: id}, updateObj, {new: true}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })

    res.json(id)
})

router.post('/pills-delete', (req, res) => {
    let id = req.body.productId;
    console.log(req.body);
    
    Pill.findByIdAndRemove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })
    res.json(id)
})

let keyword;

router.post('/pills-search', (req, res) => {
    keyword = req.body.keyword;
    let resultArr = [];

    Pill.findById(keyword, (err, result) => {
        if(err) {
            Pill.find((err, pills) => {
                if(err) {
                    console.log(err);
                    resultArr = ['error']
                    return res.json(resultArr)
                } else {
                    for(let i = 0; i < pills.length; i++) {
                        if(pills[i].title.includes(keyword)) {
                            resultArr.push(pills[i])
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