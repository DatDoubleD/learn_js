//HTML DOM
// 1. truy xuat vao cac element
// co the access through: ID, class, tag, css selector, HTML collection

//return element
var headingId = document.getElementById('heading')
console.log(headingId)

//return collection, 1 lement cung tra ve collection, can duyet vong lap de lay element
var headingClass = document.getElementsByClassName('headingclass')
console.log(headingClass)

// return collection 
var headingTagName = document.getElementsByTagName('h1')
console.log(headingTagName)

// lay bang query with class="" them dau cham. dang truoc
// var headingQuery = document.querySelector('.headingclass')
//truong hop co 2 class trung ten nhau
var headingQuery = document.querySelector(' .box .headingclass:nth-child(2)')
console.log(headingQuery)

//get box + li
var thebox = document.querySelector('.box')
var theLi = thebox.querySelectorAll('li')
console.log(theLi)

