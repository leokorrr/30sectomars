const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../../models/user.model')

mongoose.connect('mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars', { useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log('server.js: database connected');
})

router.get('/registration', (req, res) => {
    res.render('home');
})

router.post('/registration', (req, res) => {
    let user = new User({
        nickname: req.body.nickname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    user.save((err) => {
        if (err) {
            return res.status(400).json({
                title: 'error',
                error: 'email or username in use'
            })
        }

        return res.status(200).json({
            title: 'signup success'
        })
    })

})

module.exports = router;