// 1. Callback (P1)

// Là hàm (function) được truyển qua đối số
// Truyền qua đối số
// Được gọi lại (Trong hàm nhận đối số)

// function myFunction(param){
//     if(typeof param === 'function'){
//         param('Hi')
//     }
// }

// function myCallback(value){
//     console.log('Value: ', value)
// }

// myFunction(myCallback)
// // => Value: Hi

// 2.Callback (P2)

// VD1 :
// var courses = [
//     'Javascript',
//     'PHP',
//     'Nodejs'
// ] 
// var myFunction = function(course){
//     console.log(course)
// }
// courses.map(myFunction);
// // =>Javascript, PHP, Nodejs

//VD2 :
// var courses = [
//     'Javascript',
//     'PHP',
//     'Nodejs'
// ];

// Array.prototype.map2 = function(){
//     console.log(this)
// }
// courses.map2()
// // => (3) ['Javascript', 'PHP', 'Nodejs']

// var htmls = courses.map2(function(course){
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''))