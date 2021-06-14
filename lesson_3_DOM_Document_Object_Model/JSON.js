//1. la type format of  data (chuoi)
//2. js object notaion
// Stringify: chuyen doi / parse: phan tich giai ma

// // var json = '1'
// var json = '1'
// var json = '["key":"value", "key":"value"]' array
var json = '{ "name":"Dat", "age":18}'
console.log(JSON.parse(json))
console.log(JSON.stringify({
	name: 'Dat',
	age: 19
}))
