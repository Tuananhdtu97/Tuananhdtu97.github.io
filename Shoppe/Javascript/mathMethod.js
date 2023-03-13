// 1.Math.round
// 2.Math.ceil
// 3.Math.floor
// 4.Math.max
// 5.Math.min
// 6.Math.random
// 7.Math.pow
// 8.Math.PI
// 9.Math.abs (Gia tri tuyet doi)

// 1.Math.round (Lam tron 0.5)
// var x = 3.5;
// var ketqua = Math.round(x)
// console.log(ketqua)
// => 4

// 2.Math.ceil (Lam tron len theo so nguyen)
// var x = 3.1;
// var ketqua = Math.ceil(x)
// console.log(ketqua)
// => 4

// 3.Math.floor (Lam tron xuong theo so nguyen)
// var x = 3.9;
// var ketqua = Math.floor(x)
// console.log(ketqua)
// => 3

// 4.Math.max (tim gia tri lon nhat)
// VD1
// var x = [2,3,4,54,32];
// console.log(Math.max(...x))
// => 54

// VD2
// console.log(Math.max(1,2,3,4,5,23,32))
// => 32

// 5.Math.min (Tim gia tri nho nhat)
// var array = [1,2,32,43,42,22,46];
// console.log(Math.min(...array))
// => 1

// VD 2
// console.log(Math.min(2,1,4,5,65,23,21))
// => 1

// 6.Math.random (Cho 1 so ngau nhien)
// VD1 : 
// console.log(Math.round(Math.random()*100))
// => 32

// VD2 :
// x = Math.floor(1 + Math.random()*100)
// console.log(x)

// VD3 : F8
// var random = Math.floor(Math.random() *5)
// // => tra ve 1 so tu khoang 0->9
// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin'
// ]
// console.log(bonus[random])

// VD4 : F8
// var random = Math.floor(Math.random()*100);
// if(random < 50){
//     console.log('Cuong hoa thanh cong! ')
// }

// 7.Math.pow() (Luy thua)
// x = Math.pow(4,3)
// console.log(x)
// => 64

// 8. Math.PI
// console.log(Math.PI)
// => 3.141592653589793

// 9. Math.abs (Gia tri tuyet doi)
// console.log(Math.abs(-9))
// => 9