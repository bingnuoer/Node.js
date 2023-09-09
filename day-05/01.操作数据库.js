// 1.导入数据库
const mysql = require('mysql')
// 2.与相关数据库进行连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// 3.测试mysql能否正常工作
// db.query('select 1',(err,results) => {
//     // mysql模块工作期间报错了，打印错误消息
//     if(err) return console.log(err.message)
//     // 能够成功的执行SQL语句
//     console.log(results)
// })

// 4.查询数据
// 4.1 定义查询的字符串
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
//     // 查询失败
//     if (err) return console.log(err.message)
//     // 查询成功
//     console.log(results)
// })

// 5.插入数据
// 5.1 定义要插入的数据,username=Spider-Man,password=pcc123
// const user = {username:'Spider-Man',password:'pcc123'} 
// // 5.2 定义mysql插入数据语句
// const sqlStr = 'insert into users (username,password) values (?,?)'
// // 5.3 执行mysql
// db.query(sqlStr,[user.username,user.password],(err,results) => {
//     if(err) return console.log(err.message)
//     if(results.affectedRows === 1){
//         console.log('插入数据成功!')
//     }
// })

// 6.插入数据便捷方式
// const user = { username: 'Spider-Man2', password: 'pdd4321' }
// const sqlStr = `insert into users set?`
// db.query(sqlStr, user, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功!')
//     }
// })

// 7.更新数据
// 7.1 要更新的数据对象
// const user = { id: 7, username: 'aaa', password: '000' }
// // 7.2 定义SQL更新语句
// const sqlStr = 'update users set username=?,password=? where id=?'
// // 7.3 执行SQL语句
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功!')
//     }
// })


// 8.更新数据的便捷方式
// 8.1 定义数据
// const user = { id: 7, username: 'bingnuoer', password: '666666' }
// // 8.2 定义SQL
// const sqlStr = 'update users set ? where id=?'
// // 8.3 执行SQL
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功!')
//     }
// })

// 9.删除数据 删除id=7的这行数据
// 9.1 定义删除的SQL语句
// const sqlStr = 'delete  from users where id=?'
// // 9.2 执行删除的SQL语句
// db.query(sqlStr, 7, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log("删除数据成功!")
//     }
// })

// 10.标记删除 删除id=5的这行数据
// 10.1 定义SQL语句
const sqlStr = 'update users set status=? where id=?'
// 10.2 执行SQL语句
db.query(sqlStr, [1, 5], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log("标记删除成功!")
    }
})
