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
// hàm xứ lí chuỗi 
var x="điện thoại iphone";
console.log(x.length);//chiều dai chuôi
var vitri=x.indexOf('iphone');
console.log(vitri);
var x1=x.replace('iphone','samsung');
console.log(x1);
var chuoi1="iphone,samsung,oppo,nokia";
var mang=chuoi1.split(',');
console.log(mang);
console.log(mang[2]);
//cac hamm xu lý số
var so1=10, so2=3;
console.log(so1 + so2);//13
so2=so2.toString();
console.log(so1 + so2);
var kitu1= "8";
