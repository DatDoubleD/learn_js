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
fetch(courseAPI)
	.then(function (response) {
		return response.json()
	})
	.then(function (course) {
		// console.log(course)
	})
