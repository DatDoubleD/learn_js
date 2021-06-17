//c1
var array = [1, 2, 3, 4, 5, 6, 1, 2, 3]
//OUTPUT: 1 2 3 4 5 6 , khong trung nhau
console.log(array)
for (let key = 0; key < array.length; key++) {
	for (let index = key + 1; index < array.length; index++) {
		if (array[key] === array[index]) {
			array.splice(index, 1)
		}
	}

}
console.log(array)
//c2
console.log([...new Set(array)])
//----------------------- DE QUY
// xac dinh diem dung +  logic handle
//vd1 count down 
function countDown(num) {
	if (num > 0) {
		console.log(num)
		return countDown(num - 1)
	}
	return num
}
countDown(3)
//vd2: loop = de quy
var array2 = ['js', 'php', 'ruby']
function loop(start, end, callback) {
	if (start < end) {
		callback(start)
		return loop(start + 1, end, callback)
	}
}
loop(0, array2.length, function (start) {
	console.log(array2[start])
})
//vd 3: tinh giai thua
function giaiThua(number) {
	if (number > 0) {
		return number * giaiThua(number - 1)
	}
	return 1
}
console.log(giaiThua(6))