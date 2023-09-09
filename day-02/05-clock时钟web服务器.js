// 1.创建需要的文件
const http = require('http')
const fs = require('fs')
const path = require('path')

// 2.1 创建服务器
const server = http.createServer()
// 2.2 给服务器绑定事件
server.on('request', (req, res) => {
    // 3. 将客户端的url地址映射成文件的存放路径
    // 3.1 获取客户端的url地址
    // /clock/index.html
    // /clock/index.css
    // /clock/index.js
    const url = req.url
    // 3.2 映射成文件的存放路径
    // const fpath = path.join(__dirname,url)
    const fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, '/clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }

    // 4. 读取文件的内容相应给客户端
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        // 读取失败
        if (err) return res.end('404 Not found.')
        // 读取成功
        res.end(dataStr)
    })
})
// 2.3 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})