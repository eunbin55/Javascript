'use strict'; //"올바르지 않은 문법"을 사전에 검출할 수 있다.

let age = prompt('나이 입력','');
let admissionFee = "";

if(age < 13){
    admissionFee = '2,000원';
}else if(age>=13 && age<=19){
    admissionFee = '4,000원';
}else{
    admissionFee = '6,000원';
}

console.log(`age:${age}, admissionFee:${admissionFee}`);
document.write(`age:${age}, admissionFee:${admissionFee}`);
