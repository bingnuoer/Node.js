const itheima = require('./itheima-tools')

const dt = itheima.dateFormat(new Date())
console.log(dt)
console.log('---------------')

const htmlstr = '<h1 title="测试">这是测试HTML转义<span>这是一个空格&nbsp;</span></h1>'
// nbsp;是个空格
const str = itheima.htmlEscape(htmlstr)
console.log(str)
console.log('---------------')

const str2 = itheima.htmlUnEscape(str)
console.log(str2)