// 1.So sanh 2 object, JSON
// 2.Shallow copy, deep copy
// 3.Const x = {age : 10}; x.age++ => van dung
// 4.Pass by value van dung

// 1.So sanh 2 object, JSON
// var object1 = {
//     name : 'tuan anh',
//     coin : 9,
// }
// var object2 = {
//     name : 'tuan anh',
//     coin : 9,
// }
// console.log(object1 == object2)
// // => false , vi khac o nho

// var object3 = object1;
// console.log(object1 == object3)
// // => true, vi cung 1 dia chi o nho

// var ketqua = object3.coin = 10;
// console.log(object1.coin)
// // 10 , vi thay doi coin object 3, nhung object3 === object1 

// 2.Shallow copy, deep copy 
// a. Shallow copy (Coppy toan bo gia tri cua bien nay, sang 1 bien khac)
// VD1:
// var person = {
//     ten1: 'Tuan',
//     ten2: 'Anh',
//     ten3: 'Thanh Tuan'
// }
// var person2 = {
//     ...person
// }
// console.log(person2)
// => ten1: 'Tuan', ten2: 'Anh', ten3: 'Thanh Tuan'

// VD2: 
// var person = {
//     ten1: 'Tuan',
//     ten2: 'Anh',
//     ten3: 'Thanh Tuan'
// }
// person2 = Object.assign({},person)
// console.log(person2)
// => ten1: 'Tuan', ten2: 'Anh', ten3: 'Thanh Tuan'

// b.deep copy ( coppy moi toan bo gia tri)
// Javascript object notatio
// var person = {
//     ten1: 'Tuan',
//     ten2: 'Anh',
//     ten3: 'Thanh Tuan'
// }
// var x = JSON.stringify(person)
// var ketqua = JSON.parse(x)
// console.log(ketqua)