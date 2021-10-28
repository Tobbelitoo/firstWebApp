const express = require('express');
const router = express.Router();

// GET one question
router.get('/:id', (req, res) => {
    res.send(`GET request for question number ${req.params.id}`)
});

module.exports = router;