-- 查询数据表user中所有数据
-- select * from users

-- 查询数据表user中指定列
-- select username,password from users

-- 向数据表users中插入数据
-- insert into users (username,password) values ('tony stark','098123')

-- select * from users

-- 更新数据表users里面的数据 ,把id为4的用户password更新为'888888'
-- update users set password = '888888' where id = 4

-- select * from users

-- 更新数据表users里面的数据 ,把id为2的用户密码更新为'admin123',状态更新为1
-- update users set password = 'admin123',status = 1 where id = 2

-- select * from users

-- 删除表users中id为4的行
-- delete from users where id=4
-- select * from users

-- 演示where子句的使用
-- select * from users where status=1
-- select * from users where id>1
-- select * from users where username<>ls
-- select * from users
-- select * from users where username<>'ls'
-- select * from users where username!='ls'

-- 使用AND 查询status=1且id<3的用户
-- select * from users where status=1 and id<3

-- 使用OR 查询status=1或者username=zs的用户
-- select * from users where status=1 or username='zs'

-- ASC升序排序（可不写）默认升序，对数据表按照status进行升序排列
-- select * from users order by status
-- select * from users order by status ASC

-- DESC降序排序，对数据表按照id进行降序排列
-- select * from users order by id DESC

-- 多重排序，对status按照降序排列 同时 对username首字母按照升序排列
-- select * from users order by status desc,username asc

-- 统计数据总条数 count(*),统计数据表中status=0的数量
-- select count(*) from users where status=0

-- AS 起别名,给count(*)起别名为total
-- select count(*) as total from users where status=0

-- 给username起别名为uname,password起别名为upwd
-- select username as uname,password as upwd from users

-- select * from users
-- select * from users
-- select * from users
select * from users
















