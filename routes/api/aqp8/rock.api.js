const express = require ('express');
const router = express.Router();

const Rock = require('../../../models/aqp8/rock.model');

router.get('/rocks', (req, res) => {
    Rock.find((err, rocks) => {
        if(err) {
            console.log(err);
        } else {
            res.json(rocks)
        }
    })
})

router.post('/rocks-update', (req, res) => {
    let id = req.body.productId
    let updateObj = req.body.updateObj
    
    Rock.findByIdAndUpdate({_id: id}, updateObj, {new: true}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })

    res.json(id)
})

router.post('/rocks-delete', (req, res) => {
    let id = req.body.productId;
    console.log(req.body);
    
    Rock.findByIdAndRemove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send
        }

        return res.status(200).send
    })
    res.json(id)
})

let keyword;

router.post('/rocks-search', (req, res) => {
    keyword = req.body.keyword;
    let resultArr = [];

    Rock.findById(keyword, (err, result) => {
        if(err) {
            Rock.find((err, rocks) => {
                if(err) {
                    console.log(err);
                    resultArr = ['error']
                    return res.json(resultArr)
                } else {
                    for(let i = 0; i < rocks.length; i++) {
                        if(rocks[i].title.includes(keyword)) {
                            resultArr.push(rocks[i])
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