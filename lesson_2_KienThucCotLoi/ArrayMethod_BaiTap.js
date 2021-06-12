// bai tap

console.log('----------------------------------Bai 1')
//Bai 1
var depthArray = [1, 2, 3, 4, [100, 200, 300], 5, [600, 700]]
//voi mang trong mang thi reduce van tra ve dc single item
//c1
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
	return flatOutput.concat(depthItem)
}, [])
console.log(flatArray)
//c2
var flatArray2 = depthArray.reduce((flatOutput, depthArray) => flatOutput.concat(depthArray), [])
console.log(flatArray2)


console.log('----------------------------------Bai 2')
//Bai 2
var topics = [
	{
		name: 'animal',
		list: [
			{
				id: 1,
				title: 'Cat'
			},
			{
				id: 2,
				title: 'Dog'
			}
		]
	},
	{
		name: 'house',
		list: [
			{
				id: 1,
				title: 'house level 1'
			},
			{
				id: 2,
				title: 'house level 2'
			}
		]
	}
]
var newList = topics.reduce((newListOutput, item) => newListOutput.concat(item.list), [])
console.log(newList)

console.log('----------------------------------Bai 3 build my reduce that is "reduce" ')
//co initial value -> sum = 0, number = 1. khong co -> sum = 1, number = 2
var numbers = [1, 2, 3, 4, 5]

Array.prototype.reduce2 = function (callback, accumulator) {
	let index = 0
	if (arguments.length < 2) {
		accumulator = this[0]
		index = 1 // i = 1 -> this[i] la second element in array
	}
	for (; index < this.length; index++) {
		accumulator = callback(accumulator, this[index], index, this)
	}
	return accumulator
}
var totalne = numbers.reduce2((sum, number) => sum + number, 0)
console.log(totalne)
//-- include
console.log(numbers.includes(1))