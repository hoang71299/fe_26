document.write('alo');

// =:gan
// ==:so sanh 
// ===: so ssanh gia tri va kiểu dữ liệu
// alert("thong bao");
console.log('abc');
//khai bao bien
var n;
n=1;
var gt=true;
m='hello';
console.log( n + 'abc');
console.log(n + 12);
// console(n + gt);
//hàm
function ham1(){
    alert(' hien ra thong bao');
}
// ham anoymuos
// khi chay no co tốn bộ nhớ 
var ham2=function(){
    console.log('function anoumous');
}
//ham arrow
var ham3=()=>{
    console.log('function anoumous');
}
ham4=() =>{}
//mảng
var Mang=['một','hai','ba'];
console.log(Mang[0]);
console.log(Mang.length);//chieu dài của mảng
Mang.push('bon');// thêm phần tu cuối mảng
console.log(Mang.length)
Mang.unshift('KHONG');//THÊM phan tu đầu mảng
console.log(Mang[0]);
Mang.pop();//xóa phần tử cuối mảng
console.log(Mang);
Mang.shift();
console.log(Mang);
var vt=Mang.indexOf ('hai');//vị trí phần tử
console.log();
Mang.splice(vt,1);//xoa phan tu vi tri bat ki
console.log(Mang);
