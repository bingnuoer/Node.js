const express = require('express')
const app = express()

// 挂载路由
app.get('/',(req,res) => {
    res.send('Hello World!')
})
app.post('/',(req,res) => {
    res.send('Post Request.')
})

app.listen(80,() => {
    console.log('express server ruinng at http://127.0.0.1')
})