//---------------EventListener (other way to handle event similar EventDOM)
//dung khi can lam nhieu viec trong 1 function + lang nghe su kien/huy bo lang nghe 

//add vao se dc goi theo thu tu
var btn = document.getElementById('btn')

function viec1() {
	console.log('event 1')
}
function viec2() {
	console.log('event 2')
}
btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)

//have to separate it to call name of function to remove that function
setTimeout(() => {
	btn.removeEventListener('click', viec1)
}, 3000);