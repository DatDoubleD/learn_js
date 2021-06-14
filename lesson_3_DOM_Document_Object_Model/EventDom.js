//Dom event (w3s to search event necessary)
//1. attribute evetns, gan truc tiep vao card in file html
//--sub card is clicked -> parent card is -> if need that have to prevent it

//da so su dung truong hop 2
//2. assign event useing the element node
// var heading = document.querySelector('p')
var headings = document.querySelectorAll('h1')

for (let index = 0; index < headings.length; index++) {
	headings[index].onclick = function (e) {
		console.log(Math.random() * 10)
		console.log(e.target)
	}
}
console.log(heading)
//-----------set event and get value inputext Test
var inputElement = document.querySelector('input[type="text"]')
var inputValue
inputElement.oninput = function (e) {
	inputValue = e.target.value
	console.log(inputValue)
}
document.onkeydown = function (e) {
	switch (e.which) {
		case 27: console.log('Exit')
			break;
	}
}
var selectElement = document.querySelector('select')
var selectValue
selectElement.onchange = function (e) {
	selectValue = e.target.value
	console.log(selectValue)
}

var chkElement = document.querySelector('input[type="checkbox"]')
var chkValue
chkElement.onchange = function (e) {
	chkValue = e.target.checked
	console.log(chkValue)
}
//-----------------------prevent default
document.querySelector('a').onclick = function (e) {
	e.preventDefault() // ngan chan hanh vi dc set up default in html
}
///------ngan event noi bot
document.getElementById('headingbinoibot').onclick = function (e) {
	e.stopPropagation()
}
