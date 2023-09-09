// 导入验证规则的包
const joi = require('joi')

// 定义用户名和密码的验证规则
// 用户名验证规则
const username = joi.string().alphanum().min(1).max(10).required()
// 密码验证规则
// ^$:以什么开始，以什么结束
// [\S]:非空字符
// {6,12}:长度6-12位
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 定义更换头像的验证规则
// dataUri() 指的是如base64的字符串数据,头像就是这样格式的数据
const avatar = joi.string().dataUri().required()

// 3.2.2 更新用户基本信息-验证表单数据
// 定义id,nickname,emial 的验证规则
// integer()：整数
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
// email():符合邮箱的规则
const email = joi.string().email().required()

// 向外暴露 定义验证注册和表单数据的规则对象
exports.reg_login_schema = {
    body: { // 验证用户信息body 里面的username,password
        username,
        password
    },
}

// 定义规则验证对象-更新用户基本信息
exports.update_userinfo_schema = {
    // 需要对req.body里面的数据进行验证
    body: {
        // 对user里面的id验证：验证规则
        // id:id,
        // nickname:nickname,
        // email:email
        // 如果要验证的属性名和验证规则的属性名一致，可以简写
        id,
        nickname,
        email,
    },
}

// 定义规则验证对象-重置密码
exports.update_password_schema = {
    body: {
        // 旧密码： 使用 password 这个规则，验证 req.body.oldPwd 的值
        oldPwd: password,
        // 使用 joi.not(joi.ref('oldPwd')).concat(password) 规则，验证 req.body.newPwd 的值
        // 解读：
        // 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
        // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
        // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
        newPwd: joi.not(joi.ref('oldPwd')).concat(password),
    },
}

// 定义规则验证对象-更换头像
exports.update_avatar_schema = {
    body: {
        // avatar:avatar,
        avatar,
    },
}
