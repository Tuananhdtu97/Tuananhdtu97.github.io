/* Array Method */
//1. PUSH (Them 1 phan tu)
//2. Pop (Bo phan tu cuoi, va tra ve phan tu cuoi do)
//3. Shift (Bo phan tu dau tien, va tra ve phan tu dau tien)
//4. Unshift (Lay phan tu cuoi cung, nhung khong bo)
//5. Splice, (Cat phan tu).  Slice  (Lay gia tri tu bao nhieu, den bao nhieu)
//6. Map (Bien doi mang cu thanh mang moi, Mang cu khong thay doi)
//7. Filter ( lap )
//8. Sort(sort number, string) ( sap xep thu tu cua mang )
//9. forEach    
//10.indexOf ( tim vi tri cua 1 ki tu, Neu trung nhau lay ki tu dau tien )
//11.lastlndexOf
//12.includes ( Co chua phan tu can tim k )
//13.Slice
//14.Reverse ( Dao nguoc thu tu cua array)
//15.Join (cac phan tu nay se doi thanh string, nhung duoc noi nhau boi phan tu gi "-" )

// 1. Push (Them 1 phan tu)
/*var array = [1,2,3,4,5,6,7,8,9]
array.push(0)
console.log(array)*/

// 2. Pop (Bo phan tu cuoi, va tra ve phan tu cuoi do)
/* var array = [1,2,3,4,5,6,7,8,9]
var x = array.pop()
console.log(x, array) */

// 3. Shift (Bo phan tu dau tien, va tra ve phan tu dau tien)
/* var array = [1,2,3,4,5,6,7,8,9]
var x = array.shift()
console.log(x, array) */

// 4. unshift (Lay phan tu cuoi cung, nhung khong bo)
/*var array = [1,2,3,4,5,6,7,8,9]
var x = array.unshift()
console.log(x, array) */

// 5. Splice (Cat phan tu)
/* var array = [1,2,3,4,5,6,7,8,9]
var x = array.splice(0,2)
console.log(x, array) */

// slice (Lay gia tri tu bao nhieu, den bao nhieu)
/* var array = [1,2,3,4,5,6,7,8,9]
var x = array.slice(0,3)
console.log(x, array) */

// 6. Map (Bien doi mang cu thanh mang moi, Mang cu khong thay doi)
// var array = [1,2,3,4,5,'c',6,7]
// var x = array.map(function(item){
//     return 'tuan anh ' +  item
// })
// console.log(x)
// => tuan anh 1, tuan anh 2, tuan anh 3, tuan anh 4 ...

// VD2:
// var courses = [{
//     id: 1,
//     name : 'Tuan Anh',
//     coin : 20,
// },
// {
//     id : 2,
//     name : 'Ron',
//     coin : 30,

// },
// {
//     id : 3,
//     name : 'Javascript',
//     coin : 50,
// }
// ];
// function courseshandler(course, index, originArray){
//     return {
//         id: course.id,
//         name : `Co len nao: ${course.name}`,
//         coin : course.coin,
//         coinText: `gia : ${course.coin}`,
//         index: index,
//         originArray : originArray,
//     }
// }

// var newCourses = courses.map(courseshandler);
// console.log(newCourses)

// 7. filter ( lap )
// var array = [1,2,3,4,5,6,7,8,9]
// var newArray = array.filter(
//     function(item){
//         return item > 4
//     }
// )
// console.log(newArray)

// 8. sort ( sap xep thu tu cua mang )
// var myArray = [1,2,3,5,6,4,7,8,9]
// var newArray = myArray.sort(
//     function(a, b){
//         if(a > b){
//             return 1;
//         }
//         if(a < b){
//             return -1;
//         }
//         if(a == b){
//             return 0;
//         }
//     }
// )
// console.log(newArray)


// vd 2
// var arr1 = [
//     {
//     name : 'Tuan Anh',
//     score : 20,
//     },
//     {
//     name : 'Quang',
//     score : 12,
//     },
//     {
//     name : 'ngoc',
//     score : 18,
//     },
// ];
// var myArray = arr1.sort(function(a, b){
//     if(a.score < b.score){
//         return 1
//     }
//     if(a.score > b.score){
//         return -1
//     }
//     if(a.score==b.score){
//         return 0
//     }
// })
// console.log(myArray) 




// 10. indexOf ( tim vi tri cua 1 ki tu, Neu trung nhau lay ki tu dau tien )
// var array = ['a','b','c','d',5 , 'c'];
// var x = array.indexOf('c')
// console.log(x)

// 11. lastIndexOf ( Neu cac phan tu trung nhau thi lay vi tri cuoi cung)
// var array = ['a','b','c','d',5, 'c'];
// var x = array.lastIndexOf('c')
// console.log(x)

// 12. includes (Trong cai oject, array nay co ki tu can tim k)
// var array = ['a','b','c','d',5, 'c'];
// var x = array.includes('c')
// console.log(x)

// 13. 


// 14. Reverse (dao nguoc thu tu tu phai sang trai)
// var array = ['a','b','c','d',5, 'c'];
// var x = array.reverse()
// console.log(x)

// 15. Join(cac phan tu nay se doi thanh string, nhung duoc noi voi nhau bang ki tu gi "-")
// var array = ['a','b','c','d',5, 'c'];
// var x = array.join(' --- ')
// console.log(x)

