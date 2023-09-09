const express = require('express')
const router = express.Router()

// 挂载路由
router.get('/get', (req, res) => {
    // req.query获取客户端通过查询字符串给服务器发送的数据
    const query = req.query
    // 服务器把接收到的数据响应给客户端
    res.send({
        status: 0, // 0表示成功，1表示失败
        msg: 'GET请求成功!', // 状态的描述
        data: query //需要响应给客户端的数据
    })
})

router.post('/post', (req, res) => {
    // req.body获取请求体中包含url-encoded格式的数据
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST请求成功!',
        data: body
    })
})

router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE请求成功!'
    })
})

// 把路由暴露出去
module.exports = router