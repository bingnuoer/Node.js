// 1.定义格式化时间的函数
function dateFormat(dateStr) {
    const dt = new Date(dateStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth())
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 2.补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

// 把成员暴露出去
module.exports = {
    dateFormat
}