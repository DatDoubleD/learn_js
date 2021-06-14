//TEST -> innerText and TextContent

/* innerText return text that you can see in brower
   set: can set text + down line - (real)
*/

/* 
   textContent return all text that in you sources code, vd: text format style code
   set: only can set text
*/
var headingElement = document.querySelector('h1')

headingElement.innerText = 'day la text da sua ne'
//get text of card
console.log(headingElement.innerText)