const express = require('express')
const app = express()

// 连续定义多个全局的中间件
app.use((req, res, next) => {
    console.log('调用了第1个中间件')
    next()
})
app.use((req, res, next) => {
    console.log('调用了第2个中间件')
    next()
})

// 定义路由
app.get('/user', (req, res) => {
    console.log('调用了路由')
    res.send('User Page.')
})

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})