const express = require('express')
const app = express()

// 调用app.use函数，express.static方法。对外开放clock文件夹下的静态资源
// '/files' 是访问路径前缀
app.use('/abc',express.static('./files'))
app.use(express.static('./clock'))

app.listen(80,() => {
    console.log('express server running at http://127.0.01')
})