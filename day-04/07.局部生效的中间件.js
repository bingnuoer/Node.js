const express = require('express')
const app = express()

// 创建中间件
const mw1 = (req,res,next) => {
    console.log('调用了局部生效的中间件')
    next()
}

// 创建路由
app.get('/',mw1,(req,res) => {
    res.send('Home page.')
})

app.get('/user',(req,res) => {
    res.send('User Page.')
})


app.listen(80,() => {
    console.log('app server aunning at http://127.0.0.1')
})