const path = require('path')
const fs = require('fs')

// const pathStr = path.join('/a', '/b/c', '../', '/d')
// console.log(pathStr) // \a\b\d

fs.readFile(path.join(__dirname, './file/1.text'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
}) //读取文件成功！111