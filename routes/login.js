const express = require('express');
const router = express.Router();


// login
router.get('/login', (req, res, next) => {
    res.render('login', { message: req.flash('loginMessage') });
});


module.exports = router;
