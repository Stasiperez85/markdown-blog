const express = require('express')
const router = express.Router

router.length('/', (req, res) => {
    res.send('In articles')
})

module.exports