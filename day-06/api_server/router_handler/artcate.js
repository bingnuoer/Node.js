// 这是路由处理函数模块

// 获取数据库
const { result } = require('@hapi/joi/lib/base')
const db = require('../db/index')

// 路由处理函数-获取文章分类列表数据
exports.getArticleCates = (req, res) => {
    // res.send('ok')
    // 查询没有被删除的文章列表，按id从小到大排列
    // 定义sql语句
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
    // 执行sql语句
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        // if (results.length !== 1) return res.cc('查询失败!')

        res.send({
            status: 0,
            message: '获取文章分类列表成功!',
            data: results
        })
    })
}

// 路由处理函数-新增文章分类
exports.addArticleCates = (req, res) => {
    // res.send('ok')
    // 定义查重的SQL语句
    const sql = 'select * from ev_article_cate where name=? or alias=?'
    // 执行查重的SQL语句
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        // sql执行失败
        if (err) return res.cc(err)

        // 判断查询结果的长度 results.length
        if (results.length === 2) return res.cc('分类名称和分类别名被占用，请更换后重试!')
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称和分类别名被占用，请更换后重试!')
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试!')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试!')

    })
    // TODO:分类名称和分类别名都没有被占用，新增文章分类
    // 定义新增文章分类的SQL语句
    const sql1 = 'insert into ev_article_cate set ?'
    // 执行新增文章分类的SQL语句
    db.query(sql1, req.body, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('新增文章分类失败!')

        res.cc('新增文章分类成功', 0)

    })

}

// 路由处理函数-根据id删除文章分类
exports.deleteCateById = (req, res) => {
    // res.send('ok')
    // 使用标记删除-改变is_delete的状态，能更安全
    // 定义SQL语句
    const sql = 'update ev_article_cate set is_delete=1 where id=?'
    // 执行SQL语句
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('删除文章分类失败!')
        res.cc('删除文章分类成功!', 0)
    })
}

// 路由处理函数-根据Id获取文章分类数据
exports.getArticleById = (req, res) => {
    // res.send('ok')
    // 定义SQL语句
    const sql = 'select * from ev_article_cate where id=?'
    // 执行SQL语句
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取文章分类数据失败!')
        res.send({
            status: 0,
            message: '获取文章分类数据成功!',
            data: results[0]
        })
    })
}

// 路由处理函数-根据Id更新文章分类
exports.updateCateById = (req, res) => {
    // res.send('ok')
    // 定义SQL语句
    const sql = 'select * from ev_article_cate where Id<>? and (name=? or alias=?)'
    // 执行SQL语句
    db.query(sql, [req.body.Id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)

        // 判断 分类名称 和 分类别名 是否被占用 
        if (results.length === 2) return res.cc('分类名称和分类别名被占用,请更换后重试!')
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称和分类别名被占用，请更换后重试')
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试!')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试!')

        // TODO：更新文章分类
        // 定义sql语句
        const sql = 'update ev_article_cate set ? where Id=?'
        // 执行sql语句
        db.query(sql, [req.body, req.body.Id], (err,results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败!')
            res.cc('更新文章分类成功!', 0)
        })
    })
}