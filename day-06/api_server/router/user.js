// 初始化用户路由模块
// 1.5
// 1.5.1
// 导入express
const express = require('express')
// 导入路由
const router = express.Router()

// 1.6 导入用户路由函数模块
const userHandler = require('../router_handler/user')

// 2.5 导入验证用户信息的中间件
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象 只需要reg_login_schema
const { reg_login_schema } = require('../schema/user')

// 1.5.3 挂载用户路由
// 1.6 更新 导入用户路由——脱出函数

// 注册新用户
// 用验证规则验证注册的新用户信息:验证规则的中间件(验证规则对象)-expressJoi(reg_login_schema)
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)
// 有可能验证出现错误，所以在app.js中捕获错误

// 登录
// 用验证规则验证登录的新用户信息:验证规则的中间件(验证规则对象)-expressJoi(reg_login_schema)
router.post('/login', expressJoi(reg_login_schema),userHandler.login)

// 1.5.2
// 把用户路由对象共享出去
module.exports = router