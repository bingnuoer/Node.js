const path = require('path')

// 获取文件扩展名
const fName = '/a/b/c/index.html'
const rName = path.extname(fName)
console.log(rName) //.html