const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../../models/user.model');

let userId;

router.get('/login', (req, res) => {
    req.session.userId = userId
    console.log(req.session);

    loggedIn = req.session.userId ? true : false;
    res.json({ loggedIn: loggedIn })
})

router.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({ email: email }, (err, user) => {
        if (err) return res.status(500).json({
            title: 'server error',
            error: err
        })

        if (!user) {
            return res.status(401).json({
                title: 'user not found',
                error: 'invalid credentials'
            })
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid credentials'
            })
        }

        let token = jwt.sign({ userId: user._id }, 'secretkey');
        return res.status(200).json({
            title: 'login succ',
            token: token
        })
    })

})

module.exports = router; 