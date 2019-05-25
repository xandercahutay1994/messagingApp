'use strict'

const routerHandler = route => async(req, res, next) => {
    try {
        await route(req, res)
    } catch({ status = 400, message, success = false }) {
        res.status(status).send({ success, message })
    }
}
module.exports = routerHandler