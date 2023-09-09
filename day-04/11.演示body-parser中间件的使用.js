const express = require('express')
const app = express()

// 1.导入第三方中间件
const parser = require('body-parser')
// 2.注册解析url-encoded的中间件
app.use(parser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    console.log(req.body) // { name: 'zs', age: '20', gender: '男' }
    res.send('ok')
})

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})