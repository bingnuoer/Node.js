<!-- 包的说明文档 -->

## 安装
```
npm install itheima-tools
```

## 导入
```js
const itheima = require('itheima-tools')
```

## 格式化时间
```js
// 调用dateFormat函数对时间进行格式化
const dt = itheima.dateFormat(new Date())
// 输出结果 2023-07-17 11:45:51
console.log(dt)
```

## 转义HTML中的特殊字符
```js
const htmlstr = '<h1 title="测试">这是测试HTML转义<span>这是一个空格&nbsp;</span></h1>'
// nbsp;是个空格
// 调用htmlEscape方法对特殊字符进行转义
const str = itheima.htmlEscape(htmlstr)
// 输出结果 &lt;h1 title=&quot;测试&quot;&gt;这是测试HTML转义&lt;span&gt;这是一个空格&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原HTML中的特殊字符
```js
// 调用htmlUnEscape方法对已转义的字符串进行还原
const str2 = itheima.htmlUnEscape(str)
// 输出结果 <h1 title="测试">这是测试HTML转义<span>这是一个空格&nbsp;</span></h1>
console.log(str2)
```

## 开源协议
ISC