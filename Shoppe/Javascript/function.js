// 1. Khi function dat trung ten
// 2. Khai bao biến trong hàm
// 3. Định nghĩa hàm trong hàm ?

// // 1. Khi function dat trung ten
// // Function sau se de' function truoc
// function messenger(){
//     console.log("TuanAnh1")
// }
// function messenger(){
//     console.log("TuanAnh2")
// }
// messenger()
// // => TuanAnh2

// // 2. Khai bao biến trong hàm
// // Phạm vi chỉ ở trong hàm, nếu in ở ngoài sẽ lỗi 
// function messenger(){
//     var fullName = 'TuanAnh';
//     console.log(fullName)
// }
// messenger()
// // => TuanAnh

// // 3. Định nghĩa hàm trong hàm ?
// // Cũng như tham số ..., phạm vi chỉ ở trong hàm, K thể in ở ngoài sẽ lỗi 
// function messenger(){
//     function messenger2(){
//         console.log('Javascript')
//     }
//     messenger2()
// }
// messenger()
// // => Javascript

