
// la 1 function 
// truyen qua doi so
// dc goi lai (trong ham nhan doi so)

function myFunction(param) {
	if (typeof param === 'function') {
		param('111')
	}
}

function myCallBack(value) {
	console.log('value ne:' + value)
}
myFunction(myCallBack)

/// vd1 Map
console.log('----------------vi du ve callback voi map')
var courses = [
	'Js', 'PHP', 'Ruby', 'PHP', 'PHP'
]
//js method map
console.log('----------------------------js method Map')

var htmls = courses.map(function (course) {
	return `<h2> ${course}</h2>`
})
console.log(htmls.join(''))

//
console.log('--------------------------------my method Map')

Array.prototype.map2 = function (callback) {
	var Output = []
	if (typeof callback === 'function') {
		var arrayLength = this.length
		for (var i = 0; i < arrayLength; i++) {
			var result = callback(this[i], i)//callback reutn <h2>...</h2> dua vao result
			Output.push(result)
		}
		return Output
	}
}

var htmlMyMap = courses.map2(function (item, index) {
	return `<h2> ${item}</h2>`
})
console.log(htmlMyMap.join(''))
console.log('--------------------------------my method Filter')
//Filter()
//#find -> return list element
Array.prototype.filter2 = function (callback) {
	var Output = []
	for (var i in this) {
		if (this.hasOwnProperty(i)) {

			if (callback(this[i])) {
				Output.push(this[i])
			}
		}
	}
	return Output
}

var newList = courses.filter2(function (item) {
	return item === 'PHP'
})
console.log(newList)
//for earch
console.log('--------------------------------my method forEarch')
//array k phu thuoc lenght, phu thuoc index, check xem this(array) co 0wnproperty la index thi ma duyet
Array.prototype.forEach2 = function (callback) {
	for (var index in this) {
		if (this.hasOwnProperty(index)) {
			callback(this[index], index)
		}
	}
}
courses.forEach2(function (item, index) {
	console.log(item, index)
})