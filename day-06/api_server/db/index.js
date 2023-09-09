// 2.1 创建数据库表ev_users
// 2.2 创建数据库的连接对象

// 2.2.1 导入mysql模块
const mysql = require('mysql')

// 2.2.2 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// 2.2.3 向外共享db数据库连接对象
module.exports = db
