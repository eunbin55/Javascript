'use strict';

//var변수, 함수의 호이스팅(Hoisting)

//var변수와 함수는 컴파일러에 의해 호이스팅 발생!
//선언 전에 실행가능!
//compute();


function compute(){
    let x = 10;
    let y = 100;
    
    let result = x/y;
    console.log(`result:${result}`);
}

compute();