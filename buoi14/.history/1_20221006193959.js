let td1=document.getElementsByTagName('h1');
// console.log(td1);
console.log(td1[1].innerHTML);
td1[1].innerHTML="jdihddsa jd";
let xyz=document.getElementsByTagName('h4');
xyz[1].innerHTML='<div class="btn btn-info">click</div>';
for (let i = 0; i < xyz.length; i++) {
    xyz[i].innerHTML='<div class="btn btn-info">click</div>';
    
}
//bat doi tuong id
let td2=document.getElementById('td2');
//bat doi tuong class
let khoi=document.getElementsByClassName('card');
var x1=document.querySelector('.card');
console.log(x1);
var x2=document.querySelectorAll('h1');
//bắt nút đối tượng
var button=document.querySelectorAll('.nut');
// console.log(button);
button[0].classList.remove('btn-info');
button[0].classList.add('btn-danger');
button[2].classList.toggle('btn-info');
button[2].classList.toggle('btn-warning');
button[2].classList.toggle('kt');
//bat doi tuong
var nut3=document.querySelector('')


