const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const Admin = require('../../models/admin.model');
const User = require('../../models/user.model');

mongoose.connect('mongodb://admin:admin12345@ds219459.mlab.com:19459/30sectomars', { useNewUrlParser: true }, (err) => {
    if (err) throw err;
})

router.get('/admin', (req, res) => {
    let token = req.headers.token;
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })

        Admin.findById({_id: decoded.userId}, (err, user) => {
            if (err) console.log(err);
            return res.status(200).json({
                title: 'admin grabbed',
                user
            })
        })
    })
})

router.post('/add-admin', (req, res) => {
    let admin = new Admin({
        nickname: req.body.nickname,
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    console.log(admin)

    User.findOne({email: admin.email}, (err, user) => {
        if (user) {
            return res.status(400).json({
                title: 'error',
                error: 'email or username in use'
            })
        }

        if (!user) {
            admin.save((err) => {
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
        }
    })

    
})

module.exports = router; 