// ATTRIBUTE
var headingElement = document.querySelector('h1')
//JS thuc thi se them cac attribute vao element do
//the H1 k co thuoc tinh href muon them phai them bang setAttribute
headingElement.title = 'Heading ne'
headingElement.className = 'DayLaClass'

//set thuoc tinh k hop le
headingElement.setAttribute('href', 'heading')
//get thuoc tinh k hop le
console.log(headingElement.getAttribute('href'))

//get thuoc tinh hop le
console.log(headingElement.title)
console.log(headingElement)
