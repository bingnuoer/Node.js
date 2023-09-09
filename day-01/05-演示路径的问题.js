const fs = require('fs')

// 解决“./” 或 “../” 的路径错误问题，只需要把文件路径改成绝对路径
// fs.readFile('./file/1.text', 'utf8', function (err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功！' + dataStr)
// })

// 一个"\"是转义字符,两个"\\"是\
// 完整文件路径 缺点：移植性差
// fs.readFile('E:\\前端开发\\08-Node.js\\day-01\\file\\1.text', 'utf8', function (err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功！' + dataStr)
// })

// 移植行差，不利于维护，要求文件完整路径。解决办法__dirname
// __dirname 表示文件所在目录，不因node的目录改变而改变
fs.readFile(__dirname+'/file/1.text', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
})