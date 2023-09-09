const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    const str = `您请求的URL地址是:${req.url},您请求的method方法是:${req.method}`
    // 使用res.setHeader()方法——解决中文乱码问题
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(str)
})

server.listen('80', () => {
    console.log('server running is http://127.0.0.1')
})