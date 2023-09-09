// module.exports()将模块定义的内容共享出去
const age = 20
// 给module.exports挂载属性username
module.exports.username = 'zs'
// 给module.exports挂载方法sayHello
module.exports.sayHello = function () {
    console.log('Hello!')
}
// 给module.exports挂载属性age
module.exports.age = age

module.exports = {
    nikename: '小黑',
    sayHi() {
        console.log('Hi~')
    }
}