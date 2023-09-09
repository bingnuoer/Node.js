const express = require('express')
const app = express()

// 必须在配置cors之前，配置JSONP接口
app.get('/api/jsonp', (req, res) => {
    // TODO:定义jsonp接口具体的实现过程
    // 1.定义函数名
    const funcName = req.query.callback
    // 2.定义数据
    const data = { name: 'zs', age: 20 }
    // 3.拼接成一个函数的调用 函数名(数据) cb(data)，用字符串接收
    const scripStr = `${funcName}(${JSON.stringify(data)})`
    // 4.把字符串响应给客户端
    req.send(scripStr)
})


// 配置解析表单数据的中间件url-encoded
app.use(express.urlencoded({ extended: false }))
// 导入cors中间件
const cors = require('cors')
// 配置cors中间件
app.use(cors())

// 导入路由模块
const router = require('./15.router')
// 注册路由(全局中间件)
app.use('/api', router)

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})