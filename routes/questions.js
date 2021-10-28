const express = require('express');
const router = express.Router();

// GET one question
router.get('/:id', (req, res) => {
    const questionNr = "";
    res.render('layouts/question', { questionNr: req.params.id });
//    res.send(`GET request for question number ${req.params.id}`)
});

module.exports = router;