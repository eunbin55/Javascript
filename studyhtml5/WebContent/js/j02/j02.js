/**
 * let 변수
    ECMAScript 2015(ES6)
 */
 //let num = 11;
 //let num = 13;
 
 //Uncaught SyntaxError: Identifier 'num' has already been declared
 //console.log(num);
 
 
 //Uncaught ReferenceError: Cannot access 'text' before initialization
 console.log(text);//선언 + 초기화 안 된 상태
 text = 'Hoisting';//선언 + 초기화 + 할당된 상태
 let text;