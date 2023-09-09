// 这是定义文章分类的路由模块

const express = require('express')
const router = express.Router()

// 导入路由处理函数模块-文章分类数据列表
const artcate_handler = require('../router_handler/artcate')

// 导入验证数据中间件
const expressJoi = require('@escook/express-joi')
// 导入验证模块(用结构对象)-文章分类
const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/artcate')

// 挂载路由-获取文章分类的列表数据
router.get('/cates', artcate_handler.getArticleCates)
// 挂载路由-新增文章分类
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCates)
// 挂载路由-根据Id删除文章分类
// /:id 动态参数
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handler.deleteCateById)
// 挂载路由-根据Id获取文章分类
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handler.getArticleById)
// 挂载路由-根据Id更新文章分类
router.post('/updatecate', expressJoi(update_cate_schema), artcate_handler.updateCateById)


module.exports = router