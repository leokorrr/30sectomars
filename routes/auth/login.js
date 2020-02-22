const express = require ('express');
const router = express.Router();

const User = require('../../models/user.model');

let userId;

router.get('/login', (req, res) => {
    req.session.userId = userId
    console.log(req.session);

    loggedIn = req.session.userId ? true : false;
    res.json({loggedIn: loggedIn})
})

router.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (email && password) {
        User.findOne({email: email}, (err, user) => {
            if (err) throw err;
            if(user.password === password) {
                console.log('logged in')
                userId = user._id
            }
        })
    }
})

module.exports = router; 