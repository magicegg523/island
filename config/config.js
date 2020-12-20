module.exports = {
    enviroment: 'dev',
    database: {
        dbName: 'island',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456'
    },
    security: {
        secretKey: 'abcdefg',
        expiresIn: 60 * 60 * 24 * 30
    },
    wx: {
        appId: 'wx74db0d82c2c10c89',
        appSecret: '51ace202d6a8a6a45a9700f4dfbce3a7',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}