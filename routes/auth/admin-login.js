const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Admin = require('../../models/admin.model');

router.get('/admin-login', (req, res) => {
    res.render('home')
})

router.post('/admin-login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    Admin.findOne({ email: email }, (err, admin) => {
        if (err) return res.status(500).json({
            title: 'server error',
            error: err
        })

        if (!admin) {

            return res.status(401).json({
                title: 'user not found',
                error: 'invalid credentials'
            })
        }

        if (!bcrypt.compareSync(password, admin.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid credentials',
            })
        }

        let token = jwt.sign({ userId: admin._id }, 'secretkey');
        return res.status(200).json({
            title: 'login succ',
            token: token,
            role: 'admin'
        })
    })

})

module.exports = router;