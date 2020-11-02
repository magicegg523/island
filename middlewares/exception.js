const { HttpException } = require("../core/http-exception")

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        // error 简化 清晰明了的信息
        // HTTP Status Code 2xx, 4xx, 5xx
        // message
        // error_code 详细 开发者自己定义 10001 20003
        // request_url 当前请求的url
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
    }
}

module.exports = catchError