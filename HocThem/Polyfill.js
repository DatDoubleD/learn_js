var array = [1, 2, 3];
var string = ['hihi', 'huhu']
console.log(array.includes(4))
console.log(string.includes('hihi'))
// mot so trinh duyet cu khong ho tro phuong thuc includes, can phai them vao thong qua
// Prototype
if (!String.prototype.includes) {
	String.prototype.includes = function (search, start) {
		'use strict';

		if (search instanceof RegExp) {
			throw TypeError('first argument must not be a RegExp');
		}
		if (start === undefined) { start = 0; }
		return this.indexOf(search, start) !== -1; // tim dc index = 0, (0 !== -1) == true -> tim dc se tra ve true
	};
}
if (!Array.prototype.includes) {
	Array.prototype.includes = function (search, start) {
		'use strict';

		if (search instanceof RegExp) {
			throw TypeError('first argument must not be a RegExp');
		}
		if (start === undefined) { start = 0; }
		return this.indexOf(search, start) !== -1; // tim dc index = 0, (0 !== -1) == true -> tim dc se tra ve true
	};
}