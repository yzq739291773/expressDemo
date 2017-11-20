const express = require('express')
const path = require('path')

const accountRouter = express.Router()

// 导入控制器
const accountControl = require(path.join(__dirname, '../controllers/accountControllers'))

// 处理二级路由
accountRouter.get('/login', accountControl.getLogin)

accountRouter.get('/vcode', accountControl.getVcode)

// 导出accountRouter在入口文件中使用
module.exports = accountRouter