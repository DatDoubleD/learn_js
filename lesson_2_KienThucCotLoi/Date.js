//----------------Date---handle time
var date = new Date()
var moth = date.getMonth + 1
console.log(date) // lay ra date hien tai

console.log('test switch')
switch (date) {
	case 2:
		console.log('thu 2')
		break
	case 3:
		console.log('thu 3')
		break
	case 4:
		console.log('thu 4')
		break
	default:
		console.log('khong biet')
}

console.log('test ternary operator')
console.log(date.getDay() === 2 ? 'thu 2' : 'khong phai thu 2')
console.log(date.getDay())
