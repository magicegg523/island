const Router = require('koa-router')
const router = new Router()

const { HttpException, ParameterException } = require('../../../core/http-exception')

router.post('/v1/:id/classic/latest', (ctx, next) => {
    const path = ctx.params
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body
    abc
    if (true) {
        const error = new ParameterException()
        throw error
    }
})

module.exports = router