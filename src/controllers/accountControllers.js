// 导包
const express = require('express')

// 导出控制器的方法即处理具体逻辑的方法
exports.getLogin = (req, res) => {
    // 具体逻辑代码
    res.setHearder("content-type", "text/html;charset=urf-8")
    res.json({
        status: '200',
        msg: 'sucess',
        result: 'hello world'
    })
}
exports.getVcode = (req, res) => {

}