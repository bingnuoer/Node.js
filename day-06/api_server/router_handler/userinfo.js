// 导入数据库操作模块
const db = require('../db/index')
// 导入bcryptjs
const bcrypt = require('bcryptjs')

// 共享出去-获取用户基本信息的处理函数
exports.getUserInfo = (req, res) => {
    // 定义sql语句
    // password对用户很重要，所以获取用户信息不包含密码
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    // 执行sql语句
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取用户基本信息失败!')
        // 把用户信息响应给客户端
        res.send({
            status: 0,
            message: '获取用户基本信息成功!',
            data: results[0],
        })
    })
    // res.send('ok')
}

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {
    // 定义SQL语句 并传参
    const sql = 'update ev_users set ? where id=?'
    // 执行SQL语句
    db.query(sql, [req.body, req.body.id], (err, results) => {
        // sql语句执行失败
        if (err) return res.cc(err)
        // 执行sql成功，但影响行数!==1
        if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败了啊!')

        // 修改用户信息成功
        // 注意：res.send()不用return，res.cc()需要return
        return res.cc('修改用户基本信息成功!', 0)

    })
    // res.send('ok')
}

// 重置密码的处理函数
exports.updatePassword = (req, res) => {
    // res.send('ok')
    // 查询指定 id 的用户是否存在
    // 定义SQL语句
    const sql = 'select * from ev_users where id=?'
    // 执行SQL语句
    db.query(sql, req.user.id, (err, results) => {
        // 执行sql语句失败
        if (err) return res.cc(err)
        // 执行sql语句成功，检查指定 id 的用户是否存在
        if (results.length !== 1) return res.cc('用户不存在!')

        // 查询用户id存在
        // TODO:判断提交的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) return res.cc('原密码错误!')

        // 更新密码-定义新密码的值
        // 定义sql语句
        const sql = 'update ev_users set password=? where id=?'
        // 给新密码加密
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        // 执行sql语句
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            // 执行sql语句失败
            if (err) return res.cc(err)
            // 执行sql语句成功，但影响行数!==1
            if (results.affectedRows !== 1) return res.cc('更新密码失败!')

            // 更新密码成功
            res.cc('更新密码成功!', 0)
        })
        // res.cc('ok')
    })
}

// 更换用户头像的处理函数
exports.updateAvatar = (req, res) => {
    // res.send('ok')
    // 定义sql语句
    const sql = 'update ev_users set user_pic=? where id=?'
    // 执行sql语句
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        // 执行sql语句失败
        if (err) return res.cc(err)
        // 执行sql语句成功，但影响行数!==1
        if (results.affectedRows !== 1) return res.cc('更新头像失败!')
        // 更新头像成功
        res.cc('更新头像成功!', 0)
    })
}