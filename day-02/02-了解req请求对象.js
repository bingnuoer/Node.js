const http = require('http')
const server = http.createServer()
server.on('request',(req,res) => {
    // 客户端向服务器发送数据
    const url = req.url
    const method = req.method
    const str = `request url is ${url},and request method is ${method}`
    console.log(str)
    // 服务器向客户端相应数据,调用res.end()方法
    res.end(str)

})
server.listen(80,() => {
    console.log('server running at http://127.0.0.1')
})