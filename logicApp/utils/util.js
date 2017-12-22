/**
 * 格式化时间
 * @param  {Datetime} source 时间对象
 * @param  {String} format 格式
 * @return {String}        格式化过后的时间
 */
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getOrderNumber(date) {

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var number = year + '' + month + '' + day + '' + hour + '' + minute + '' + second;
  return number;
}
module.exports = {
  formatTime: formatTime,
  getOrderNumber:getOrderNumber
}
//# sourceMappingURL=util.js.map