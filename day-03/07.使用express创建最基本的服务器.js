// 1.导入express
const express = require('express')

// 2.创建服务器
const app = express()

// 4.监听客户端的get和post请求,并向客户端相应具体内容
app.get('/user', (req, res) => {
    // 调用express里面的send()方法，响应一个 JSON 对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})

app.post('/user', (req, res) => {
    // 调用express里面的send()方法，响应一个 文本字符串
    res.send('请求成功')
})

app.get('/', (req, res) => {
    // 默认情况下，req.query是个空对象
    console.log(req.query)
    res.send(req.query)
})

app.get('/user/:id/:name', (req,res) => {
    // req.params动态参数,默认是个空对象
    console.log(req.params)
    res.send(req.params)
})

// 3.启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})