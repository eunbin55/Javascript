/**
 * var변수는 동일한 변수 중복 선언 가능,
    let은 중복 선언 불가
    
    var 변수 호이스팅
 */
 
 var num = 11;
 var num = 13;
 
 console.log('num:'+num);
 
 // 변수, 함수 호이스팅
 // 함수 내에서 아래에 위치하는 변수가 컴파일러에 의해 끌어 올려지는 것.
 // 자바스크립트 parser 내부적으로 끌어 올려서 처리된다.
 console.log(text);//선언 + 초기화 안 된 상태
 text = 'Hoisting';//선언 + 초기화 + 할당된 상태
 var text;