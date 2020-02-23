const express = require ('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../../models/user.model');

router.get('/user', (req, res) => {
    let token = req.headers.token;
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })

        User.findById({_id: decoded.userId}, (err, user) => {
            if (err) console.log(err);
            return res.status(200).json({
                title: 'user grabbed',
                user
            })
        })
    })
})

module.exports = router