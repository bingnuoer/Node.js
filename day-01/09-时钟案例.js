// 1.1 导入文件
const { log } = require('console')
const fs = require('fs')
const path = require('path')

// 1.2 给style标签，script标签 匹配正则 
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.读取文件
fs.readFile(path.join(__dirname, '../index.html'), 'utf8', function (err, dataStr) {
    // 2.1文件读取失败
    if (err) return console.log('读取文件失败！' + err.message)
    // 2.2文件读取成功 拆解css,js,html文件
    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHtml(dataStr)
})

// 3 定义拆解Css的函数 resolveCss
function resolveCss(htmlStr) {
    // 3.1 正则匹配style
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1)
    // 3.2 替换style标签，获取style标签里面的主体代码
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')
    // console.log(newCss)
    // 3.3 创建clock文件夹，写入index.css文件
    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCss, function (err) {
        if (err) return console.log('index.css文件写入失败！' + err.message)
        console.log('index.css文件写入成功！')
    })

}

// 4. 定义拆解JS的函数 resolveJs
function resolveJs(htmlStr) {
    // 4.1 正则匹配script标签
    const r2 = regScript.exec(htmlStr)
    // console.log(r2)
    // 4.2 替换，去除script标签行
    const newJs = r2[0].replace('<script>', '').replace('</script>', '')
    // 4.3 写入index.js文件
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJs, function (err) {
        if (err) return console.log('index.js文件写入失败！' + err.message)
        console.log('index.js文件写入成功！')
    })
}

// 5.定义拆解html的函数 resolveHtml
function resolveHtml(htmlStr){
    // 5.1 替换html页面中的style和script标签内容为css和js链接
    const newHtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    // 5.2 写入index.html文件中
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHtml,function(err){
        if(err) return console.log('index.html文件写入失败！'+err.message)
        console.log('index.html文件写入成功！')
    })
}
