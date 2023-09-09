const express = require('express')
const app = express()

// 1.定义路由
app.get('/', (req, res) => {
    // 1.1 人为制造错误
    throw new err('服务器内部发生了错误!')
    res.send('Home page.')
})

// 2.定义错误级别的中间件，捕获整个项目的错误，防止程序崩溃
app.use((err, req, res, next) => {
    console.log('发生了错误!' + err.message)
    res.send('Error:' + err.message)
})

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})