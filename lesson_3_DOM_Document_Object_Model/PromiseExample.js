// DOM, Array, Callback, Promise
var user = [
	{
		id: 1,
		name: 'Dat'
	},
	{
		id: 2,
		name: 'Tam'
	},
	{
		id: 3,
		name: 'Duc'
	}
]
var comments = [
	{
		id: 1,
		user_id: 1,
		content: 'chao ban Tam'
	},
	{
		id: 2,
		user_id: 2,
		content: 'Hii!, Chao ban Dat ne.'
	},
	{
		id: 3,
		user_id: 1,
		content: 'Hihi!'
	}
]
// I. Video
//tu API -> lay ra comment -> lay ra user_id
//tu user_id -> lay ra user tuong ung
function getComments() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve(comments)
		}, 1000);
	})
}

//set user nam trong userIds	
function getUsers(userIds) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			var listUser = user.filter(function (user) {
				return userIds.includes(user.id)
			})
			resolve(listUser)
		}, 1000);
	})
}
//Test
getComments()
	.then(function (comments) {
		var userIds = comments.map(function (comments) {
			return comments.user_id
		})
		return getUsers(userIds)
			.then(function (listUser) {
				return {
					users: listUser,
					comments: comments
				}
			})
	})
	.then(function (listUserAndComment) {
		var commentsBlock = document.getElementById('comments-box')
		var html = ''
		listUserAndComment.comments.forEach(function (comment) {
			var user = listUserAndComment.users.find(function (user) {
				return user.id === comment.user_id
			})
			html += `<li>${user.name}: ${comment.content}</li>`

		});

		commentsBlock.innerHTML = html
		console.log(listUserAndComment)
	})
//My way
function myTest() {
	return new Promise(function (resolve) {
		var hmtl = ''
		comments.forEach(function (comment) {
			var userItem = user.find(function (userItem) { //user id is only
				return userItem.id === comment.user_id
			})
			hmtl += `<li>${userItem.name}: ${comment.content}</li>`
		})
		resolve(hmtl)
	})
}
myTest().then(function (hmtl) {
	var commentsBlockHai = document.getElementById('comments-box-hai')
	commentsBlockHai.innerHTML = hmtl
})
