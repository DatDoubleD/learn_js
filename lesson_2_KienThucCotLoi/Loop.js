//-------------------Loop
//for, foreach, for in (key), for of (value), while, dowhile

//for in dung lay key with string, array, object
console.log('------for in')
console.log('---object')
var myInfo = {
	name: 'Dat',
	age: 18,
	address: 'VN'
}
for (var key in myInfo) {
	console.log(key)
	console.log(myInfo[key])
}

var languages = [
	'Js',
	'PHP',
	'Ruby',
	'Java'
]
console.log('-----------------------array')
for (var key in languages) {
	console.log(languages[key])
}
console.log('--------------------String')
var str = 'toi la dat ne'
for (var key in str) {
	console.log(str[key])
}
console.log('----------------for in')
console.log('---array')
// for of dung lay value, dung cho array, object thi phai bien doi 1 chut
for (var value of languages) {
	console.log(value)
}
console.log('---object')
for (var value of Object.values(myInfo)) {
	console.log(value)
}
// the rest are like kotlin
console.log('----------------do-while')
//vd do while
var soLanNhap = 0
var mkSai = true // mac dinh nhap sai
do {
	console.log('Nhap mk lan ' + soLanNhap)
	if (mkSai) {
		soLanNhap++
	}
} while (soLanNhap < 3)