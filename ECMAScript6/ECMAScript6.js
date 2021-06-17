/*** use babel, not js thuan
 1. Let, const
2. Template Literals `${}`
3. Multi-line String ``
4. Arrow function
5. Classes
6. Default parameter values
7. Destructuring
8. Rest parameters (...)
9. Spread (...)
10. Enhanced object literals
11. Tagged template literal
12. Modules
13. optional chaining
*/

//  1. var /let, const: 
// scope: pham vi truy cap var > let,const
// hosting: var > let,const
// assignment: const k dc assignment, co the changed property of object

// 4. Arrow function
function sum(a, b) {
	return a + b
}
//arrow, **arrow mustn't be method in object , constructor for object
const tong = (a, b) => a + b;
const voiObject = (a, b) => ({ a: a, b: b });
const voiOneParameter = a => a + 5;

// 5.Classes
class HocSinh {
	constructor(msv, name) {
		this.name = name
		this.msv = msv
	}
	getName() {
		return this.name
	}
	setMsv(msv) {
		this.msv = msv
	}
}
// 6 default parameter
function logger(log, type = 'log') {
	console[type](log)
}
//k truyen gi mac dinh la log, tham so k bat buoc truyen vao -> dung default value
logger('msg')

//10 enhanced object literals,
// defind key, value, method, key as varialbe for object literals
var filedName = 'new-name'
const course = {
	[filedName]: 'PHP',
	price: 10000,
	//mehod: 
	getName() {
		return filedName
	}
}
console.log(course.getName())

//7. Destructuring
// - vs Array
var array = ['js', 'php', 'ruby']
//lay theo dung thu tu
var [a, , c] = array
console.log(a, c)
//rest se la phan con lai
var [c, d, ...rest] = array
console.log(rest)
// - vs object
var student = {
	name: 'Dat',
	age: 19,
	address: 'VN',
	children: {
		name: 'Js'
	}
}
//8 rest, use with destructuring -> call is rest
var { name, ...rest } = student // lay ra name, rest la object gom 2 rest element
var { name, age, address } = student // lay ra 3 element, use exactly element name of object
var { name, ...newObject } = student // xoa name, newobject la object moi gom 2 element
var { name, des = 'default value' } = student // khong co des -> lay default value

function test(...rest) { // <- rest
	for (let index = 0; index < rest.length; index++) {
		console.log(rest[index])
	}
}
test(...array) // <- spread, truyen doi so
//9. use with function -> call is spread

var array1 = ['js', 'php', 'ruby']
var array2 = ['dart', 'kotlin']
var array3 = [...array2, ...array1]
console.log(array3)

//11. template literals 
var a = 'A'
var b = 'B'
const html = highlight`day la ${a} con day la chu ${b} ne!`
console.log(html)
/*** 
 * 0: ["day la ", " con day la chu ", " ne!"]
 * 1: "A"
 * 2: "B"
*/
//first: day la
//...rest : ["con day la chu", " ne!"]
//value: [A, B]
function highlight([first, ...rest], ...value) {
	return value.reduce(
		(accumulator, currentValue) =>
			[...accumulator, `<span>${currentValue}</span>`, rest.shift()], [first]
	)
}
//13, qua nhiu thuoc tinh va k chac rang nhung thuoc tinh do co ton tai
const obj = {
	name: 'Alice',
	cat: {
		name: 'hihi',
		cat2: {
			name: 'hihi',
			cat3: {
				name: 'hihi',

			}
		}
	},
	// getName() {
	// 	return this.name
	// }
}
if (obj?.cat?.cat2?.cat3?.name) {
	console.log(obj?.cat?.cat2?.cat3?.name)
}
//function k co loi error neu getName is not exist
console.log(obj?.getName?.())
