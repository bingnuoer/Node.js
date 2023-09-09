const express = require('express')
const app = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由前配置
// 通过express.json()这个中间件，解析JSON格式的客户端发送过来的请求体数据
app.use(express.json())
// 通过express.urlencoded()这个中间件，解析url-encoded格式的客户端发送过来的请求体数据
app.use(express.urlencoded({ extended: false }))

// 创建路由
app.post('/user', (req, res) => {
    // req.body,接收客户端发送过来的JSON格式和url-encoded格式的数据
    console.log(req.body) // { name: 'zs', age: 20 }
    // 注意：客户端发送过来的请求体数据是JSON格式，如果没有配置JSON格式的数据，req.body默认等于undefined
    res.send('ok')
})
app.post('/book', (req, res) => {
    // 注意：客户端发送过来的请求体数据是url-encoded格式，如果没有配置url-encoded格式的数据，req.body默认等于空对象{}
    console.log(req.body)
    res.send('ok')
})

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})