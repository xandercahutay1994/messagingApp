'use strict'
const router = require('express').Router()
const user = new(require('../controllers/user'))

// POST REQUEST
router.post('/user', routerHandler(user.createUser))

module.exports = router