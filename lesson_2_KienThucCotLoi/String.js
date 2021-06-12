//--------------------------Chuoi---------------------
var myName = 'Dat' // ' ' -> return 1(khoang trang van tinh la 1 ki tu)
var myNickName = 'Double D hihi ! D'
console.log(myName.length)
console.log(`Toi la: ${myName} ${myNickName}`)

//Js string methods
//find index // tra ve vi tri cua ki tu dau tien
console.log(`${myNickName.lastIndexOf('D')} - ${myNickName.indexOf('D', 2)}`)
console.log(myNickName.search('D'))

//cut 
console.log(myNickName.slice(6, 10))

//replace //only replace first charater, must use  regex
console.log(myNickName.replace(/D/g, 'Dat'))

//covert to upper case, lowwer case
//trim

//split
var languages = 'ahihihihi'
console.log(languages.split(''))

//get a charater by index
console.log(myNickName.charAt(2)) //k co tra ve empty string
console.log(myNickName[2]) // k co tra ve undefined

//include = contain