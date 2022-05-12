'use strict';

let str01 = 'pcwk_자바스크립트';
console.log(`str01:${str01}`);
//str01:pcwk_자바스크립트


//encodeURIComponent()  영문, 숫자, (, -, ., ~, *, !을 제외한 문자를 인코딩                                       
let encodeStr = encodeURIComponent(str01);
console.log(`encodeStr:${encodeStr}`);
//encodeStr:pcwk_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8


//decodeURIComponent()   encodeURIComponent()의 디코딩 함수                                        
let decodeStr = decodeURIComponent(encodeStr);
console.log(`decodeStr:${decodeStr}`);
//decodeStr:pcwk_자바스크립트