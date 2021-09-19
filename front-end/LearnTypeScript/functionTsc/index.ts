// Hàm trả về kiểu number
function sum(a, b) :number{
    return a + b;
}
console.log(sum(8,"3"));
function device(a,b) {
    return {};
}
console.log(device(5,5));
// có hai loại hàm
// loại 1:
var sumTc = (a:number, b:number) => a + b;
console.log(sumTc(2,4));
// phải khai báo trc khi gọi (tách phần khai báo riêng ra)
var g: (x: number, y: number) => number = (x,y) => x + y;
console.log(g(4,5))
// loại 2:
function demo(){

}