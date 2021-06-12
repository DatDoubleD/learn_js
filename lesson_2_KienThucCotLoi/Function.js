//------------------------------------ function
//normal
function testMsg(msg) {
	console.log(msg)
}
testMsg('hihi')

// a lot of element
function testArguments() {
	console.log(arguments)
	//c2 dung for
	var stringOutPut
	for (const item of arguments) {
		stringOutPut += item + " "
	}
}
testArguments('cat', 'dog', 'otter')

//- declaration function - co the goi truoc 
function declarationFunction_1() {

}
setTimeout(function () {

})
var myObject = {
	myFunction: function () {

	}
}

// - expression function - khong the goi truoc khi code dc tao ra
var declarationFunction_2 = function () {

}

// - arrow function