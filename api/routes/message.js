const router = require('express').Router()

router.get('/message', (req,res)=> {
    res.send('message')
})

module.exports = router