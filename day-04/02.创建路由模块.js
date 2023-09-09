// 创建一个基本服务器
const express = require('express')
const app = express()

// 1.导入路由模块
const router = require('./03.router')

// 2.注册路由
// 注意：app.use() 的作用 注册全局中间件
// app.use(express.static('./files'))
app.use('/api', router)

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})