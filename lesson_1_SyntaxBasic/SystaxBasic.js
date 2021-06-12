//----------------------------------------------- khai bao bien-----------------------------------------------
/**
 * cm1
 * cm2
 */
//var myName = 'DoanDucDat'

//----------------------------------------------------Built - in function basic-----------------------------------------------
/**
 * alert
 * console
 * confirm : there are ok and cancel
 * prompt : giong confirm co them inputtext
 * set timeout: delay time
 * set interval: run continuously sau 1 khoang time
 */

// setTimeout(function() {

// }, 1000)

//-----------------------------------------------------ToanTu-----------------------------------------------
/**
 * + - * / % -- ++ , **, ==, === la nhan luy thua
 */
//vd ++2 -> tang gia tri truoc, 2++ tang gia tri sau 
// == : so sanh gia tri k quan tam data type  vd. 1 will be equal '1'
// === : so sanh gia tri + data type

//----------------------------------------------------Phep Gan-----------------------------------------------
//x **=y -> x = x**y

//----------------------------------------------------boolean-----------------------------------------------
/***
*- 0, NaN, undefined, null, "", false , gia tri nay gan cho variable boolean type => false

*- Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:
 * '0' (một chuỗi chứa số không)
 * '' (một chuỗi chứa dấu cách)
 * 'flse' (một chuỗi chứa từ khóa false)
 * [](một array trống)
 * {}(một object trống)
 * function(){} (một hàm trống”)

 *- document.all chuyển sang boolean sẽ là false
document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
Khi typeof document.all sẽ trả về "undefined"

 */

//--------------------------------------------------toan tu logic-----------------------------------------------
/**
 * && , ||, !
 */
// && se kiem tra tat ca, khi k co falsy no se lay cai vua kiem tra cuoicung, 
//khi gap falsy se lay falsy ma k quan tam nhung cai dang sau nua
var result = 'A' && 'B' && 'C' // -> return C vi k co cai la  falsy -> C la cai cuoi cung

// || no se doc value kiem tra khi gap "value mang gia tri true(k nam trong 6 gia tri falsy)" se lay lun, k quan tam dang sau
//-----------------------------------------------------Data Type-----------------------------------------------
/**
 * number, string, boolean, undefined, null, symbol. Function, Object
 */

// var id = Symbol('id') variable is unique
// var hihi = function(){ //create
//     alert('ahihi')
// }
// hihi() //run

// var myObject = {  define key
//     name: 'dat',
//     age: 18,
//     myFunction: function () {

//     }
// }
// var myArray = ['chuoi 1', 'chuoi 2', 'chuoi 3'] // undefine key, key auto matic begin 0 ->...
// use type of
//NOTE: type of null -> return object @@, 

