const express = require ('express');
const router = express.Router();

router.get('/registration', (req, res) => {
    res.render('home');
})

module.exports = router;