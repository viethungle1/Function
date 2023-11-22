// Bài 1: Viết hàm bình phương của 1 số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được
// function squareN (n) {
//     return n*n;
// }
// let num = +prompt("Nhập số bất kỳ");
// document.write("Bình phương của số " +num+ " là " +squareN(num))
// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
//     let pi=3.14;
// function area (n) {
//     return n*n*pi;
//  }
//  function perimeter (n) {
//     return n*2*pi;
//  }
//
//  let num = +prompt("Nhập");
// alert(area(num));
// alert(perimeter(num));

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

// let number = +prompt("Nhập số bất kỳ");
// function factorial (n) {
//     let result=1;
//     for (let i = 1; i <=n ; i++) {
//         result *= i;
//     }
//     return result;
// }
// alert("Giai thừa của số "+number+ " là "+factorial(number));


// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.

// function isNumber (n) {
//         return n * 1 == n
// }
// let num=prompt("Nhập ký tự")
// alert(isNumber(num))

// Bài 5

// let arr = []
// for (let i = 0; i < 3; i++) {
//     arr[i] = +prompt("Nhập số thứ " +i);
// }
// function checkMin(n){
// let min =  n[0];
// for (let i = 1; i < n.length; ++i) {
//     if (min > n[i]) {
//         min = n[i];
//     }
// }
// document.write("Giá trị nhỏ nhất là ",min);
// }
// checkMin(arr)

// Bài 6

// let num=+prompt("Nhập vào một số");
// function isInteger(n) {
//     return n>0;
// }
// document.write(isInteger(num));

// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó

// function swap(a,b) {
//     let arr=[a,b];
//     arr[0]=b;
//     arr[1]=a;
//     return arr;
// }
// console.log(swap(2,3))

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.

// let arr = [2,5,6,8,7,1,20]
// function swap(n) {
//     let first = 0;
//     let last = n.length - 1;
//     while (first < last) {
//         let a = n[first];
//         n[first] = n[last];
//         n[last] = a;
//         first++;
//         last--;
//     }
// }
// console.log(swap(arr))

// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
let array=["h","h","u","u","n","n","g","g"]
function fD (arr,x) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            count++;
        }
        return count
    }
}
console.log(fD(array,"k"))
