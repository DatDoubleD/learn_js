// use  JsonServer to fake API or Mock API
//lib in github, "npm install -g json-server" -g that is global,
// only install in specific folder, name is: json_sever

//step by step
//cd Json_Server
/***  1. npm install  json-server
 * 2. fake data in file.json
 * 3. set start in package.json ="json-server --watch db.json"
 * 4. npm start
 */

var courseAPI = 'http://localhost:3000/course'
// GET
function start() {
	getCourses(function (courses) {
		renderCourse(courses)
	})
	handleCreateForm()
}
start()

function getCourses(callback) {
	fetch(courseAPI)
		.then(function (response) {
			return response.json()
		})
		.then(callback)
}

function renderCourse(courses) {
	var list = document.querySelector('#list-course')
	var htmls = courses.map(function (course) {
		return `<li class = "course-item-${course.id}">
			<h4>${course.name}</h4>
			<p> ${course.description}</p>
			<button onclick = "deleteCourse(${course.id})">
			Xoa</button>
		</li>`
	})
	list.innerHTML = htmls.join('')
}

//POST
function handleCreateForm() {
	var btnCreate = document.getElementById('create')

	btnCreate.onclick = function () {
		var name = document.querySelector('input[name="name"]').value
		var description = document.querySelector('input[name="description"]').value
		var fromData = {
			name: name,
			description: description
		}
		createCourse(fromData, function () {
			getCourses(function (courses) {
				renderCourse(courses)
			})
		})
	}
}
function createCourse(data, callback) {
	//sau khi tao se tra ve data vua tao
	var option = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}
	fetch(courseAPI, option)
		.then(function (response) {
			return response.json()
		})
		.then(callback)
}
//Delete
function deleteCourse(courseId) {
	var option = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	}
	fetch(courseAPI + '/' + courseId, option)
		.then(function (response) {
			return response.json()
		})
		.then(function () {//xoa tren API + Xoa tren DOM, han che call API again
			var course = document.querySelector('.course-item-' + courseId)
			course.remove
		})
}
