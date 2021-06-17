// 
var Houses = [
	{
		id: 1,
		name: 'A',
		level: 1
	},
	{
		id: 2,
		name: 'B',
		level: 1
	},
	{
		id: 3,
		name: 'C',
		level: 2
	},
	{
		id: 4,
		name: 'D',
		level: 2
	},
	{
		id: 5,
		name: 'E',
		level: 3
	},
]
//ForEach // k return dc, muon duyet va return dung -> map
console.log('----foreach')
Houses.forEach(function (House, index) {
	console.log(House, index)
})

//Every return true/false
//kiem tra lieu rang tat ca element co thuoc tinh === gia tri nao do?, 
console.log('----every')
var allLevelOfTheHouseIs1 = Houses.every(function (House, index) {
	return House.level === 1
})
console.log(allLevelOfTheHouseIs1)

//some: return true/false
//chi can 1 element thoa man dk => tra ve true
console.log('----some')
var ifIsThereLevelOfTheHouseThatIs1 = Houses.some(function (House, index) {
	return House.level === 1
})
console.log(ifIsThereLevelOfTheHouseThatIs1)

//Find(): return element
//not find -> return undefined/ find -> return one element that is first element
console.log('-------find')
var findHouseHasNameIsD = Houses.find(function (House, index) {
	return House.name === 'D'
})
console.log(findHouseHasNameIsD)


//Filter()
//#find -> return list element
console.log('-------find')
var listFined = Houses.filter(function (House, index) {
	return House.level === 1
})
console.log(listFined)

//Map()
//transform: moi lan duyet qua element no se goi function,  reutrn list
//vi vay parameter House chung la each element in Houses
console.log('-------map')
var newList = Houses.map(
	function (House, index) {
		return {
			id: House.id,
			name: `khoa hoc nay la: ${House.name}`,
			level: House.level + 1
		}
	}
)
// arrow function: newList = Houses.map(House => {...})
console.log(newList)

//reduce: return parameter accumulator
//tinh toan something vi du tinh tong  -> tra ve gia tri accumulator parameter
//currentValue la phan tu dang dc duyet hien tai
console.log('--------reduce')
function levelHandler(accumulator, currentValue, currentIndex, originalArray) {
	// return cai gi thi cai do se dc luu vao accumulator
	return currentValue.level + accumulator
}
var sumOfLevel = Houses.reduce(levelHandler, 0) // 0 is accumulator
//house.reduce(acc, curr => {...}, 9)
console.log(sumOfLevel)
