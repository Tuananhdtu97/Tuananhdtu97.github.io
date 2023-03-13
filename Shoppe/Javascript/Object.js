// var emailKey = 'Email';
// var myInfo = {
//     name : "Tuan Anh",
//     age : 18,
//     address : "Quang Tri",
//     [emailKey] : 'Helo@gmail.com'
// }

// // 1. thêm key và value sau khi object được tạo
// myInfo.email = 'Tuananhdtu97@gmail.com'  // Thêm 1 cặp key và value sau khi object được tạo
// myInfo['my-email'] = 'ronem180197@gmail.com' // Thêm 1 cặp key và value sau khi object được tạo
// console.log(myInfo)
// // VD2:

// // 2. Lấy value
// // Vd1:
// console.log(myInfo.name)
// // => Tuan Anh

// // Vd2:
// console.log(myInfo['name'])
// // => Tuan Anh

// // vd3: tìm value thông qua biến
// var myKey = '++address';
// console.log(myInfo[myKey])
// // => Quang Tri 

// // 3. Xóa 1 key value
// delete myInfo.age
// console.log(myInfo)


// var emailKey = 'Email';
// var myInfo = {
//     name : "Tuan Anh",
//     age : 18,
//     address : "Quang Tri",
//     [emailKey] : 'Helo@gmail.com',
//     getName: function(){
//         return this.name
//     }
// }
// // Function --> Phương thức;
// // Other --> Thuộc tính / Property

// console.log(myInfo.getName())
// // => Tuan Anh