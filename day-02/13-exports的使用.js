// console.log(module.exports)
// console.log(exports)
// console.log(module.exports === exports) //true

const username = 'zs'
module.exports.username = username
exports.age = 20
exports.sayHi = function(){
    console.log('Hi')
}
