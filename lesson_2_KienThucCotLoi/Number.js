/**
 * Number.isFinite()	     Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	         Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()      	 Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()   	     Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	 Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	 Chuyển đổi và trả về số đã cho dưới dạng chuỗi
 */
//Nan la number nhung so k hop le
var result = 20 / 'ABC'
console.log(isNaN(result))
var money = 2.23432432
console.log(money.toFixed(3))