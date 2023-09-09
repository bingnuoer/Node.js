const express = require('express')
const app = express()
// 导入Node.js内置模块querystring,解析字符串
const qs = require('querystring')

// 解析表单的中间件
app.use((req, res, next) => {
    // 中间件的业务逻辑
    // 1.监听req的data事件
    // str存储客户端发送过来的数据
    let str = ''
    // 给req绑定data事件，监听客户端发送的数据，用chunk接受。然后用str拼接起来
    req.on('data', (chunk) => {
        str += chunk
    })
    // 监听req的end事件，获取到完整的客户端数据后进行处理
    req.on('end', () => {
        // str中存放的时完整的客户端数据
        // console.log(str)
        // TODO:把字符串形式的数据格式 解析成对象格式
        // 调用querystring.parse()函数，识别字符串，并解析成对象
        const body = qs.parse(str)
        // 将上游的数据挂载到req上，下游的路由也可以访问req挂载的数据:req.body
        req.body = body
        // 中间件不要忘了next()
        next()
    })
})

// 创建路由
app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => {
    console.log('app server running at http://127.0.0.1')
})