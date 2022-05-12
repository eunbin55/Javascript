 //문법을 타이트하게 검사해라!
 'use strict';
 
 //상수: 변경할 수 없는 데이터
 //const 변수명
 let cm = 200;
 
 const DIVISION_VALUE = 100;
 
 //Uncaught TypeError: Assignment to constant variable.
 //DIVISION_VALUE = 200;
 
 console.log(cm+"/"+DIVISION_VALUE+"="+(cm/DIVISION_VALUE));
 
 //ES6에서 추가된 데이터 출력
 const COUNT = 11;//정수
 const SIZE = 17.1;//실수
 
 console.log(`value: ${COUNT}, type:${typeof COUNT}`);
 console.log(`value: ${SIZE}, type:${typeof SIZE}`);