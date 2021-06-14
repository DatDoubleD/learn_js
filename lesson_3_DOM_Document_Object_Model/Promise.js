//Async:
/**
 * setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
 * request animation frame, nhan biet cac viec lam xong -> dung callback
 * cau hoi pv
 * Promise: xu ly cac bat dong bo vi truoc do khi xu ly se dung callback -> callback hell
 * 	code bi roi, kho hieu.
 */

//3 trang thai: pending, goi resolve -> fullFilled, reject -> rejected
var promise = new Promise(
	//excutor
	function (resolve, reject) {
		//success: resolve and vice versa
		resolve({
			name: 'js'
		})
		reject('co loi')
	}
)
//khi goi resolve/reject cac callback nay se dc goi
//su dung method .then/catch, truyen vao callback function, thuc hien then khi.., lot vao catch khi..
//gia tri return trong method then thu nhat se dc truyen vao method then thu hai
// neu first method then return new promise -> promise do phai giai quyet xong then tiep theo moi chay
promise
	.then(function (course) {
		return course.name = 'js da sua doi'
	})
	.then(function (data) {
		console.log(data)
	})
	.catch(function (error) {
		//reject
		console.log(error)
	})
	.finally(function () {
		//one of them is called , this will be called
		console.log('end')
	})
//vd: in ra "1" sau 1s in ra '2' sau 1s in ra'3'
// neu first method then return new promise -> promise do phai giai quyet xong then tiep theo moi chay
function sleep(ms) {
	return new Promise(function (resolve) {
		setTimeout(resolve, ms)
	})
}
sleep(1000)
	.then(function () {
		console.log(1)
		return sleep(1000)
	})
	.then(function () {
		console.log(2)
		return new Promise(function (resolve, reject) {
			reject('co loi')
		})
	})
	.then(function () {
		console.log(3)
		return sleep(1000)
	})
	.catch(function (error) {
		console.log(error) // se phai co catch khi k chac nhung promise sau se 100% success
	})
//Promise.resolve/reject/all
var promiseTest = Promise.resolve('success') // luon luon thanh cong va chay .then, tru khi trong .then co 1 promise khac la reject
promiseTest.then(function (result) {
	console.log(result)
})
// var promise = new Promise.reject ->  nguoc lai
// Promise.all: chay song song nhieu promise va KHONG PHU THUOC VAO NHAU
var promise1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve([1])
	}, 2000)
})
var promise2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve([2, 3])
	}, 5000)
})
Promise.all([promise1, promise2])
	.then(function (result) {
		var result1 = result[0]
		var result2 = result[1]
		console.log(result1.concat(result2))
	})//chi can 1 cai reject se nhay vao catch
	.catch(function (error) {

	})