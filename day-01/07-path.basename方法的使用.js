const path = require('path')

const fName = '/a/b/c/index.html'

// const resultName = path.basename(fName)
// console.log(resultName) // indext.html

// 参数2：'.html'，去除文件扩展名，只输出文件名
const resultName = path.basename(fName,'.html')
console.log(resultName) //index