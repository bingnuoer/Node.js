const express = require('express')
const app = express()


// 解析表单的中间件
// 1.导入自定义的中间件模块
const customBodyParser = require('./custom-body-parse')
// 2.将自定义的中间件模块，注册成全局中间件
app.use(customBodyParser)

// 创建路由
app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})