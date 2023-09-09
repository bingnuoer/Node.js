const fs = require('fs')
fs.readFile('./file/11.text','utf8',function(err,dataStr){
    console.log(err)
    console.log('__________________')
    console.log(dataStr)
})