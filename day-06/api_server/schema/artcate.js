// 导入定义验证规则的模块
const joi = require('joi')

// 定义 name(分类名称) 和 alias(分类别名) 的校验规则
const name = joi.string().required()
// alphanum() 值只能是包含 a-zA-Z0-9 的字符串
const alias = joi.string().alphanum().required()
// 定义验证规则-根据 Id 删除文章分类
const id = joi.number().integer().min(1).required()


// 校验规则对象-添加文章分类
exports.add_cate_schema = {
    body: {
        name,
        alias,
    },
}

// 校验规则对象-根据 Id 删除文章分类
exports.delete_cate_schema = {
    params: {
        id,
    }
}

// 校验规则对象-根据 Id 获取文章分类
exports.get_cate_schema = {
    params: {
        id,
    }
}

// 校验规则对象-根据Id更新文章分类
exports.update_cate_schema = {
    body: {
        Id: id,
        name,
        alias,
    },
}
