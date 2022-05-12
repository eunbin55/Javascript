'use strict'; //"올바르지 않은 문법"을 사전에 검출할 수 있다.

let age = 23;
let admissionFee = "";

if(age < 13){
    admissionFee = '2,000원';
}else{
    admissionFee = '4,000원';
}

console.log(`age:${age}, admissionFee:${admissionFee}`);

//파비콘(favicon)*.ico
//<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">