// 1.初始化
// 1.1 创建项目，导入包，创建一个服务器
// 导入express
const express = require('express')
//  创建一个服务器实例
const app = express()

// 2.5 导入验证规则
const joi = require('joi')

// 1.2 配置cors跨域
// 导入cors
const cors = require('cors')
// 配置为全局中间件
app.use(cors())

// 1.3 配置解析表单数据的全局中间件
// 注意：express.urlencoded()只能配置解析express.urlencoded/x-www-form-urlencoded 格式的表单数据中间件
app.use(express.urlencoded({ extended: false }))

// 2.4 优化res.send()传递错误消息的代码 封装一个全局的res.cc()函数
app.use((req, res, next) => {
    // 默认将status = 1，为失败
    res.cc = (err, status = 1) => {
        res.send({
            // 状态
            status,
            // 状态描述，判断err 是 错误对象 还是 字符串
            // err instanceof Error ：err是否属于实例对象
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 2.7 一定在路由之前配置解析Token的中间件
const expressJWT = require('express-jwt')
// 导入配置文件
const config = require('./config')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))
// 需要身份认证的接口 要在postman里面发送请求时，Header面板定义Authorization属性，值是post发送请求对用户信息加密的Token字符串

// 1.5 导入并使用用户路由
const userRouter = require('./router/user')
// 使用用户路由为全局路由
// 每次调用用户登录/注册界面时，url前都要加"/api"
app.use('/api', userRouter)

// 3.1.0 导入并使用用户信息路由
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)

// 4.2 导入并使用文章分类的路由模块
const artCateRouter = require('./router/artcate')
app.use('/my/article', artCateRouter)

// 5.导入并使用文章路由模块
const articleRouter = require('./router/article')
app.use('/my/article', articleRouter)
// 托管静态资源文件-将 `uploads` 目录中的图片托管为静态资源：
app.use('/uploads', express.static('./uploads'))


// 2.5 验证规则后 捕获错误,定义错误中间件
app.use((err, req, res, next) => {
    // 数据验证失败
    // 如果err是Joi.ValidationError的一个实例对象，说明错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 捕获身份认证失败的错误-解密错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败!')
    // 未知错误
    res.cc(err)

})

//  调用listen方法，启动服务器
app.listen(3007, () => {
    console.log('api server running at http://127.0.0.1')
})