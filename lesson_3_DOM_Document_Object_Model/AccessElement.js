//HTML DOM
// 1. truy xuat vao cac element
// co the access through: ID, class, tag, css selector, HTML collection

//getElementById - return element
var headingId = document.getElementById('heading')
console.log(headingId)

//getElementsByClassName return collection
// 1 lement cung tra ve collection, can duyet vong lap de lay element
var headingClass = document.getElementsByClassName('headingclass')
console.log(headingClass)

//getElementsByTagName return collection 
var headingTagName = document.getElementsByTagName('h1')
console.log(headingTagName)

//querySelector - return element
//querySelectorAll: return collection

//truong hop co 2 class trung ten nhau, chon ten thu nhat hoac thu hai
var headingQuery = document.querySelector(' .box .headingclass:nth-child(2)')
console.log(headingQuery)

//get box + li, tu node box co the access tu box tro di qua thebox variable
var thebox = document.querySelector('.box')
var theLi = thebox.querySelectorAll('li')
var thep = thebox.querySelectorAll('p')
console.log(theLi)
console.log(thep)

