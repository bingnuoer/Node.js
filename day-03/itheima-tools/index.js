// 包的入口文件
// 导入dateFormat.js和Escape.js这两个文件
const date = require('./src/dateFormat')
const escape = require('./src/Escape')


// 3.把内部变量暴露出去
module.exports = {
    // 用es6的方法，把date和escape这两个对象展开
    ...date,
    ...escape
}