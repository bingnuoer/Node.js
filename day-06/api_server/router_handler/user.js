// 导入数据库模块
const { result } = require('@hapi/joi/lib/base')
const db = require('../db/index')
// 导入加密的包
const bcrypt = require('bcryptjs')
// 导入生成用于加密的Token字符串
const jwt = require('jsonwebtoken')
// 导入给用户信息加密的秘钥 这个全局包
const config = require('../config')


// 注册新用户的路由处理函数
exports.regUser = (req, res) => {
    // 2.3.1
    // 获取客户端提交到服务器的用户信息 req.body
    const userinfo = req.body
    // console.log(userinfo)
    // 校验用户名是否合法
    // (用户名或者密码不为true)
    // if (!userinfo.username || !userinfo.password) {
    //     // return res.send({ status: 1, message: '用户名或密码不能为空!' })
    //     return res.cc('用户名或密码不能为空!')
    // }
    // 使用验证规则来验证用户名是否合法

    // 2.3.2 检测用户名是否被占用 db.query()
    // 定义sql语句
    const sql = 'select * from ev_users where username=?'
    // 执行sql语句
    db.query(sql, userinfo.username, (err, result) => {
        // sql语句执行失败
        if (err) {
            // return res.send({
            //     status: 1,
            //     message: err.message
            // })
            return res.cc(err)
        }

        // sql语句执行成功,判断用户名是否被占用 
        // results.length>0:用户名被占用，results.length=0，用户名没被占用
        // 用户名被占用
        if (result.length > 0) {
            // return res.send({
            //     status: 1,
            //     messaeg: '用户名被占用,请更换其他用户名!'
            // })
            return res.cc('用户名被占用,请更换其他用户名!')
        }
        // TODO:用户名可用
        // 2.3.3 对用户密码进行加密
        // console.log(userinfo.password)
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        // console.log(userinfo.password)

        // 2.3.4 插入新用户
        // 定义sql语句
        const sql = 'insert into ev_users set ?'
        // 执行sql语句
        // {username:userinfo.username,password:userinfo.password}用这个填充"?"是因为只插入username，password两个属性值
        db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            // sql语句执行失败
            if (err) {
                // return res.send({
                //     status: 1,
                //     message: err.message
                // })
                return res.cc(err)
            }
            // sql语句执行成功，但影响行数不为1
            if (results.affectedRows !== 1) {
                // return res.send({
                //     status: 1,
                //     message: '注册用户失败，请稍后再试!'
                // })
                return res.cc('注册用户失败，请稍后再试!')
            }
            // 插入新用户成功
            // res.send({ status: 0, message: '注册成功!' })
            res.cc('注册成功!', 0)

        })

        // res.send('reguser OK')
    })

}

// 用户登录的路由处理函数
exports.login = (req, res) => {
    // 2.6 根据用户名查询用户的数据
    // 接收表单数据
    const userinfo = req.body
    // 定义SQL语句
    const sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        // sql语句失败
        if (err) return res.cc(err)
        // sql语句成功，但是查询到数据条数!=1
        if (results.length !== 1) return res.cc('用户名不存在!')

        // TODO:查询用户名成功，判断用户输入的登录密码和数据库中的密码一致
        // results[0]：是用户信息
        // const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        // if (!compareResult) return res.cc('登录失败!')
        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)

        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) return res.cc('密码错误！')

        // TODO:登陆成功，生成Token字符串

        // 2.6.4 生成 JWT 的 Token 字符串
        // 剔除用户敏感信息:服务器把响应给客户端的用户密码和头像置空
        const user = { ...results[0], password: '', user_pic: '' }
        // console.log(user)
        // res.send('login OK!')

        // 调用jwt.sign()方法，对用户信息加密，生成加密的Token字符串
        // 3个参数：用户信息名，秘钥文件里的秘钥名，有效期
        // const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: '10h' })
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        // console.log(tokenStr)
        // 用res.send()把加密的用户信息-tokenStr响应给客户端
        res.send({
            status: 0,
            message: '登录成功!',
            // token: tokenStr
            // 方便客户端
            token: 'Bearer ' + tokenStr
        })

    })
}

// // 把两个函数共享出去
// module.exports = {
//     regRouter,
//     logRouter
// }