'use strict'
const Koa = require('koa');
const path = require('path')
var wechat = require('./wechat/g')
var util = require('./libs/util')
var config = require('./config')
var weixin = require('./weixin')

var wechat_file = path.join(__dirname, './config/wechat.txt')

const app = new Koa();

app.use(wechat(config.wechat, weixin.reply))

app.listen('80', '127.0.0.1', err => {
    if (err) {
        console.log(err)
        return false;
    }
    console.log('ok')
})