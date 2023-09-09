// 1.定义格式化时间的方法
function dateFormat(dateStr) {
    const dt = new Date(dateStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`

}

// 2.定义补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

// 3.将格式化时间的方法-私有成员共享出去
module.exports = {
    dateFormat
}