const express = require('express')

const app = express()

app.get('/account', (req, res) => {
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.json({
        status: '200',
        msg: 'sucess',
        result: 'hello world'
    })
})
app.listen('3000', '127.0.0.1', (err) => {
    if (err) {
        console.log(err)
        return false
    }
    console.log('ok')
})