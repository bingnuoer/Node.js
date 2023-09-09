const fs = require('fs')

fs.writeFile('./file/3.text','ok',function(err){
    // console.log(err)
    if(err){
        return console.log('文件写入失败！')
    }
    console.log('文件写入成功！')
})