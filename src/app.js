// 导包
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


// 创建app
var app = express()


// 处理路由
const manRouter = require(path.join(__dirname, 'routers/manRouter.js'))
const womenRouter = require(path.join(__dirname, 'routers/womenRouter.js'))

// 注意这里不能直接use bodyParser,会提示什么过期
app.use(bodyParser.urlencoded({ extended: false }))

// express内置处理静态文件的中间件
app.use(express.static('statics'))

// 请求、处理、响应
// app.all 方法拦截所有路由，所以必须放在所有路由前面，如果放在一级路由后面就不生效
app.all('*', (req, res, next) => {
    console.log('拦截所有请求，即在所有请求之前响应')
    if (true) {
        console.log('执行下一步')
        next()
    } else {
        console.log("请登录")
    }
})

// 这里拦截一级路由，拦截后给后面的路由中间件处理，路由中间件负责处理二级路由
app.use('/man', manRouter)
app.use('/women', womenRouter)


app.get('/login/*', (req, res) => {
    // http://192.168.31.23:3000/login/1?name=%22yzq%22&pwd=%22123%22
    // 获取get请求的两种形式的参数
    // 1.req.query获取？后面的参数
    // 2.req.params获取路径最后的参数，如这里的‘1’
    // console.log(req)
    // console.log(req.query)
    // console.log(req.params)
    // console.log(req.body)
    res.setHeader("Content-type", "text/html;charset=utf-8")
    res.json({
        status: '200',
        msg: 'sucess',
        result: 'hello 俞志强2'
    })
})

app.post('/login/*', (req, res) => {
    // 处理post请求的参数需要body-parser中间件
    console.log(req.body)
    res.json({
        status: '200',
        msg: 'sucess',
        result: 'hello 俞志强'
    })
})

// 开启web服务
var server = app.listen(3000, '192.168.31.23', (err) => {
    if (err) {
        console.log(err)
        return false
    }
    console.log('start ok')
})