// use API in JsonPlaceHolder
// get user API
var userAPI = 'https://jsonplaceholder.typicode.com/users'
//fetch : use promise
fetch(userAPI)
	.then(function (response) {
		return response.json()
		//response is a pomise and it.json is mean: Json.Parse
	})
	.then(function (users) { //user that is parsed data
		htmls = users.map(function (userItem) {
			return `<li>
				<h2>${userItem.name}</h2>
				<p>${userItem.email}</p>
			</li>`
		})
		var html = htmls.join('')
		document.getElementById('fetch-box').innerHTML = html
	})
	.catch(function (error) {
		console.log('co loi!')
	})