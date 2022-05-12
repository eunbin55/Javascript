'use strict';
/*
class 클래스명 {
    constructor(매개변수01, 매개변수02, ...){
        this.이름01 = 매개변수01;
        this.이름02 = 매개변수02;
    }
    
    메서드(){}
    get 메서드() {}
    set 메서드(){}
}

let 변수01 = new 클래스명(매개변수01, 매개변수02, ...);
let 변수02 = new 클래스명(매개변수01, 매개변수02, ...);
*/

class Person{
    //생성자
    constructor(name, age){
        //멤버변수
        this.name = name;
        this.age = age;
    }    
    //메서드
    speak(){
        console.log(`name:${this.name}, age:${this.age} speak!`);
    }
    
}

const pcwk = new Person('PCWK',23)
//멤버변수
//pcwk.name: PCWK
console.log(`pcwk.name: ${pcwk.name}`);
//pcwk.age: 23
console.log(`pcwk.age: ${pcwk.age}`);

pcwk.speak();



