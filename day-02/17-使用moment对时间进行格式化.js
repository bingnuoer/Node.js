// 1.导入需要的包
// 注意：导入的名称，就是装包时的名称
//       装包时的包名称要带引号
const moment = require('moment')

// 2.对时间进行格式化
// moment()导入时间，format()对时间进行格式化
// hh:mm:ss 双位数：表示要补0
// h:m:s 单位数：表示不需要补0
// const dt = moment().format('YYYY-MM-DD hh:mm:ss')
const dt = moment().format('YYYY-MM-DD h:m:ss')
console.log(dt)