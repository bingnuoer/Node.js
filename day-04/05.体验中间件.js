const express = require('express')
const app = express()

// // 定义一个最简单的中间件函数
// const mw = function (req, res, next) {
//     console.log('这是最简单的中间件函数')
//     // 把流转关系，转交给下一个中间件/路由
//     next()
// }

// // 把mw注册为全局生效的中间件
// app.use(mw)

// 定义一个最简单的中间件函数-简写形式
app.use((req, res, next) => {
    // 获取到 请求到达服务器的时间
    const time = Date.now()
    // 为req挂载自定义属性，把时间共享给后面所有的路由
    req.starTime = time
    next()
})

// 定义路由
app.get('/', (req, res) => {
    res.send('Home page.' + req.starTime)
})
app.get('/user', (req, res) => {
    res.send('User page.' + req.starTime)
})

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})