// 1.接收成员
const Time = require('./15-dateFormat')

const dt = new Date()
// console.log(dt)

// 2.调用方法，进行时间格式化
const newDt = Time.dateFormat(dt)
console.log(newDt)

