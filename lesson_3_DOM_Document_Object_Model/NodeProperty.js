//other property
var boxElement = document.querySelector('.box')
console.log([boxElement])
//co nhiu thuoc tinh nhu:
/**
 * textNode type = 3
 * attributeNode type = 2
 * elementNode type = 1
 * spellcheck
 * autofocus:
 * baseURI: lay ra domain hien tai
 * childelementcount: element con (cac the con )
 * childNodes: gom cac textnode va elementnode
 * classlist:...
 * childdren: tra ve array elementNode
 * draggale: co the 
 * nextElementSibling: return next element of current element
 * autocapitalize: tu dong viet hoa khi contexteditable: true
 */

Object.assign(boxElement.style, {
	with: '100px',
	height: '100px',
	backgroundColor: 'green'
})
//lay ra value of css in line
console.log(boxElement.style.with)

//----------------------classList property, quan li dc classlist
// add: them class vao element, contains: check class if in this element
//, remove, toggle: chua co class ->them vao, co rui-> xoa bo
console.log(boxElement.classList)
//add: add class red into boxElement
boxElement.classList.add('red', 'abc...')
//contains
console.log(boxElement.classList.contains('red'))
//remove
setTimeout(() => {
	boxElement.classList.remove('red')
	//sau 3s toggle xe them vao class neu chua co, xoa neu da co(ap dung vao open/close menu)
	boxElement.classList.toggle('red')
}, 3000);