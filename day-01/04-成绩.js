// 1.调用fs
const { log } = require('console')
const fs = require('fs')

// 2.读文件
fs.readFile('../成绩.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败！' + err.message)
    }
    // console.log('文件读取成功！' + dataStr)
    // 3.读取文件成功后，对数据进行操作
    // 3.1 将成绩按照空格进行分割
    const oldArr = dataStr.split(' ')
    // console.log(oldArr)
    // 3.2 循环旧数组，实现字符串替换 ，然后写入新数组
    const newArr = []
    oldArr.forEach(item => {
        newArr.push(item.replace('=','：')) 
    })
    // console.log(newArr)
    // 3.3 新数组的每一项 进行合并 得到一个新的字符串，用换行符合并
    const newStr = newArr.join('\r\n')
    console.log(newStr)

    // 4.把新字符串写入文件
    fs.writeFile('./file/成绩-ok.txt',newStr,function(err){
        if(err){
            return console.log('成绩录入失败！'+err.message)
        }
        console.log('成绩录入成功！')
    })
})