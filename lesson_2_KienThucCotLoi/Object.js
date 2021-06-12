// -------------------------Object
// property - method = function
var newKey = 'newKeyNe'
var myInfo = {
	name: 'Dat Ne',
	age: 18,
	address: 'VN',
	[newKey]: 'newkey@gmail.com',
	getName: function () {
		return this.name
	}
	//, 'name-full': 'abc'  - dung string de dat ten neu meu co ki tu 
}
console.log(myInfo)
//co them them cac loai data type vao object ke ca function
console.log(typeof myInfo.getName)
console.log('name la:' + myInfo.getName())


// them 
myInfo.email = 'abc@gmail.com'
myInfo['email-2'] = 'ABC@gmail.com'
//them key la variable

//lay ra
//c1
console.log('tim key age ne! ' + myInfo.age) // tim key ten la age trong object
//c2
console.log('tim key email-3: ' + myInfo['email-3']) // key k co tra ve undefined
//ung dung c2
var mykey = 'address'
console.log('tim gia tri voi key la variable truyen vao: ' + myInfo[mykey]) // lay ra gia tri voi key truyen vao

//xoa
delete myInfo.age
console.log('--------------------')
//-----------------------------------------object constructor
//constructor
function User(firstsName, lastName, avatar) {
	this.firstsName = firstsName
	this.lastName = lastName
	this.avatar = avatar
	this.getName = function () {
		return `${this.firstsName} ${this.lastName}`
	}
}
var author = new User('Dat', 'Duc', 'Avatar')
console.log(author)
console.log(author.constructor === User)
//them thuoc tinh cho tung doi tuong ma k bi anh huong den constructor
//chi author ms co new property
author.title = 'Hi! minh la Dat'
author.description = 'thich an hai san'
console.log(author.getName())
console.log('--------------------')
//-----------------------------------------object prototype
//them thuoc tinh khi constructor dc tao ra, se nam trong __proto___ trong console
//dung lai vidu tren
User.prototype.className = 'F8'
User.prototype.getClassName = function () {
	return this.className // tra ve className = 'F8'
}
console.log('goi thuoc tinh prototype:' + author.getClassName())







