// 初始化文章路由函数模块

// 导入并配置multer-解析 formdata 格式表单数据的包
const multer = require('multer')
// 导入处理路径的核心模块
const path = require('path')
// 导入数据库操作模块
const db = require('../db/index')

// 创建multer的实例对象，通过dest属性指定文件的存放路径
const upload = multer({
    dest: path.join(__dirname, '../uploads')
})
// 整理要插入数据库的文章信息对象
const articleInfo = {
    ...req.body,
    cover_img: path.join('/uploads', req.file.filename),
    pub_date: new Date(),
    author_id: req.user.id,
}
// 路由函数模块-发布新文章
exports.addArticle = (req, res) => {
    // res.send('ok')
    // 文本类型的数据
    console.log(req.body)
    console.log('------------')
    // console.log(req.file)
    // 手动判断是否上传了文章封面
    if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面是必选参数!')
    // TODO:表单数据合法，继续后面的处理流程
    const sql = `insert into ev_articles set ?`
    // 执行 SQL 语句
    db.query(sql, articleInfo, (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)

        // 执行 SQL 语句成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('发布文章失败！')

        // 发布文章成功
        res.cc('发布文章成功', 0)
    })
    // res.send('ok')
}

