// 导包
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// 创建app
const app = express()

// 获取post参数，需要使用body-parser插件
app.use(bodyParser.urlencoded({ extended: false }))

// 集成路由
const accountRouter = require(path.join(__dirname, "controllers/accountControllers.js"))
    // 拦截所有一极路由为：/account的请求，将其交给accountRounter路由去处理
app.use('/account', accountRouter)

// 开启web服务
app.listen(3000, '127.0.0.1', (err) => {
    if (err) {
        console.log(err)
        return false
    }
    console.log('Ok')
})